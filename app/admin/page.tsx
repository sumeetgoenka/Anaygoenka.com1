'use client';

import { useState, useEffect, useCallback } from 'react';
import type { BlogPost } from '@/lib/blog';
import type { HelloMessage } from '@/lib/hello';

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [isAuthed, setIsAuthed] = useState(false);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'blog' | 'hello'>('blog');
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState('');
  const [globalError, setGlobalError] = useState('');
  const [helloMessages, setHelloMessages] = useState<HelloMessage[]>([]);
  const [loadingHello, setLoadingHello] = useState(false);
  const [helloError, setHelloError] = useState('');

  // Form state
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const storedPassword = typeof window !== 'undefined' ? sessionStorage.getItem('admin_pwd') : null;

  useEffect(() => {
    if (storedPassword) {
      setPassword(storedPassword);
      setIsAuthed(true);
    }
  }, [storedPassword]);

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    setGlobalError('');
    try {
      const res = await fetch('/api/blog');
      if (res.ok) {
        const data = await res.json();
        setPosts(data);
      } else {
        let data: { error?: string; details?: string } = {};
        let rawText = '';
        try {
          rawText = await res.text();
          data = rawText ? JSON.parse(rawText) : {};
        } catch (parseError) {
          console.error('Failed to parse posts error response:', parseError);
        }
        console.error('Failed to fetch posts', {
          status: res.status,
          statusText: res.statusText,
          body: rawText,
        });
        setGlobalError(
          data.details ? `${data.error || 'Failed to fetch posts'} — ${data.details}` : data.error || 'Failed to fetch posts'
        );
      }
    } catch (error) {
      console.error('Failed to fetch posts:', error);
      setGlobalError(
        error instanceof Error ? `Failed to fetch posts — ${error.message}` : 'Failed to fetch posts'
      );
    }
    setLoading(false);
  }, []);

  const fetchHelloMessages = useCallback(async () => {
    setLoadingHello(true);
    setHelloError('');
    try {
      const res = await fetch('/api/hello', {
        headers: { 'x-admin-password': password },
      });
      if (res.ok) {
        const data = await res.json();
        setHelloMessages(data);
      } else {
        let data: { error?: string; details?: string } = {};
        let rawText = '';
        try {
          rawText = await res.text();
          data = rawText ? JSON.parse(rawText) : {};
        } catch (parseError) {
          console.error('Failed to parse hello error response:', parseError);
        }
        console.error('Failed to fetch hello messages', {
          status: res.status,
          statusText: res.statusText,
          body: rawText,
        });
        setHelloError(
          data.details ? `${data.error || 'Failed to fetch messages'} — ${data.details}` : data.error || 'Failed to fetch messages'
        );
      }
    } catch (error) {
      console.error('Failed to fetch hello messages:', error);
      setHelloError(
        error instanceof Error ? `Failed to fetch messages — ${error.message}` : 'Failed to fetch messages'
      );
    }
    setLoadingHello(false);
  }, [password]);

  useEffect(() => {
    if (!isAuthed) return;
    if (activeTab === 'blog') {
      fetchPosts();
    } else {
      fetchHelloMessages();
    }
  }, [isAuthed, activeTab, fetchPosts, fetchHelloMessages]);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (password === 'MONKEY') {
      setIsAuthed(true);
      sessionStorage.setItem('admin_pwd', password);
    }
  }

  function resetForm() {
    setTitle('');
    setSlug('');
    setContent('');
    setTags('');
    setDate(new Date().toISOString().split('T')[0]);
    setEditingPost(null);
    setShowForm(false);
    setError('');
  }

  function startEdit(post: BlogPost) {
    setEditingPost(post);
    setTitle(post.title);
    setSlug(post.slug);
    setContent(post.content);
    setTags(post.tags.join(', '));
    setDate(post.date);
    setShowForm(true);
    setError('');
  }

  function startCreate() {
    resetForm();
    setShowForm(true);
  }

  function switchTab(tab: 'blog' | 'hello') {
    setActiveTab(tab);
    if (tab === 'hello') {
      setShowForm(false);
      setEditingPost(null);
      setError('');
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    const postData = {
      title,
      slug: slug || slugify(title),
      content,
      tags: tags.split(',').map((t) => t.trim()).filter(Boolean),
      date,
      password,
    };

    try {
      let res: Response;
      if (editingPost) {
        res = await fetch(`/api/blog/${editingPost.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(postData),
        });
      } else {
        res = await fetch('/api/blog', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(postData),
        });
      }

      if (!res.ok) {
        let data: { error?: string; details?: string } = {};
        let rawText = '';
        try {
          rawText = await res.text();
          data = rawText ? JSON.parse(rawText) : {};
        } catch (parseError) {
          console.error('Failed to parse error response:', parseError);
        }
        console.error('Blog save failed', {
          status: res.status,
          statusText: res.statusText,
          body: rawText,
        });
        setError(
          data.details
            ? `${data.error || 'Something went wrong. Please try again.'} — ${data.details}`
            : data.error || 'Something went wrong. Please try again.'
        );
        return;
      }

      resetForm();
      fetchPosts();
    } catch (error) {
      console.error('Failed to save post:', error);
      setError('Network error. Please check your connection and try again.');
    }
  }

  async function handleDelete(post: BlogPost) {
    if (!confirm(`Delete "${post.title}"?`)) return;
    try {
      await fetch(`/api/blog/${post.id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      fetchPosts();
    } catch (error) {
      console.error('Failed to delete post:', error);
    }
  }

  // Password gate
  if (!isAuthed) {
    return (
      <section className="py-24 md:py-32 bg-white min-h-screen">
        <div className="container mx-auto px-6 max-w-md">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-normal text-slate-900 mb-4">Admin</h1>
            <div className="w-16 h-1 bg-slate-900 mx-auto"></div>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-slate-900 transition-colors"
            />
            <button
              type="submit"
              className="w-full px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-base font-medium transition-all hover:shadow-lg"
            >
              Enter
            </button>
          </form>
        </div>
      </section>
    );
  }

  // Dashboard
  return (
    <section className="py-24 md:py-32 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-normal text-slate-900 mb-2">Blog Admin</h1>
            <div className="w-16 h-1 bg-slate-900"></div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative inline-flex rounded-full bg-slate-100 p-1">
              <span
                className={`absolute left-1 top-1 h-[calc(100%-0.5rem)] w-24 rounded-full bg-white shadow transition-transform ${
                  activeTab === 'blog' ? 'translate-x-0' : 'translate-x-24'
                }`}
              ></span>
              <button
                type="button"
                onClick={() => switchTab('blog')}
                className={`relative z-10 w-24 px-3 py-2 text-sm font-medium rounded-full transition-colors ${
                  activeTab === 'blog' ? 'text-slate-900' : 'text-slate-500'
                }`}
              >
                Blog
              </button>
              <button
                type="button"
                onClick={() => switchTab('hello')}
                className={`relative z-10 w-24 px-3 py-2 text-sm font-medium rounded-full transition-colors ${
                  activeTab === 'hello' ? 'text-slate-900' : 'text-slate-500'
                }`}
              >
                Hello
              </button>
            </div>
            {activeTab === 'blog' && (
              <button
                onClick={startCreate}
                className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-sm font-medium transition-all hover:shadow-lg"
              >
                New Post
              </button>
            )}
          </div>
        </div>
        {globalError && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
            {globalError}
          </div>
        )}

        {/* Create/Edit Form */}
        {activeTab === 'blog' && showForm && (
          <div className="bg-white border border-slate-200 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-normal text-slate-900 mb-6">
              {editingPost ? 'Edit Post' : 'New Post'}
            </h2>
            {error && (
              <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-slate-900 font-medium mb-2">Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                    if (!editingPost) setSlug(slugify(e.target.value));
                  }}
                  required
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-slate-900 transition-colors"
                  placeholder="Post title"
                />
              </div>
              <div>
                <label className="block text-slate-900 font-medium mb-2">Slug</label>
                <input
                  type="text"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-slate-900 transition-colors"
                  placeholder="url-friendly-slug"
                />
              </div>
              <div>
                <label className="block text-slate-900 font-medium mb-2">Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-slate-900 transition-colors"
                />
              </div>
              <div>
                <label className="block text-slate-900 font-medium mb-2">Tags (comma-separated)</label>
                <input
                  type="text"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-slate-900 transition-colors"
                  placeholder="nextjs, firebase, learning"
                />
              </div>
              <div>
                <label className="block text-slate-900 font-medium mb-2">Content</label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                  rows={12}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-slate-900 transition-colors resize-none"
                  placeholder="Write your post... (separate paragraphs with blank lines)"
                />
              </div>
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-base font-medium transition-all hover:shadow-lg"
                >
                  {editingPost ? 'Update' : 'Publish'}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 rounded-lg text-base font-medium transition-all hover:shadow-lg"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {activeTab === 'blog' ? (
          <>
            {/* Posts List */}
            {loading ? (
              <div className="text-center py-12">
                <p className="text-slate-500">Loading posts...</p>
              </div>
            ) : posts.length === 0 ? (
              <div className="bg-white border border-slate-200 rounded-lg p-12 text-center">
                <p className="text-slate-600 text-lg">No posts yet. Create your first one!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white border border-slate-200 rounded-lg p-6 flex items-center justify-between"
                  >
                    <div>
                      <h3 className="text-lg font-normal text-slate-900">{post.title}</h3>
                      <p className="text-sm text-slate-500">
                        {new Date(post.date).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })}
                        {post.tags.length > 0 && ` · ${post.tags.join(', ')}`}
                      </p>
                    </div>
                    <div className="flex gap-2 shrink-0 ml-4">
                      <button
                        onClick={() => startEdit(post)}
                        className="px-4 py-2 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 rounded-lg text-sm font-medium transition-all"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(post)}
                        className="px-4 py-2 bg-white hover:bg-red-50 text-red-600 border border-slate-200 rounded-lg text-sm font-medium transition-all"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          <>
            {helloError && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                {helloError}
              </div>
            )}
            {loadingHello ? (
              <div className="text-center py-12">
                <p className="text-slate-500">Loading messages...</p>
              </div>
            ) : helloMessages.length === 0 ? (
              <div className="bg-white border border-slate-200 rounded-lg p-12 text-center">
                <p className="text-slate-600 text-lg">No hello messages yet.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {helloMessages.map((message) => (
                  <div
                    key={message.id}
                    className="bg-white border border-slate-200 rounded-lg p-6"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-normal text-slate-900">{message.name}</h3>
                        <a
                          href={`mailto:${message.email}`}
                          className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
                        >
                          {message.email}
                        </a>
                      </div>
                      <div className="text-sm text-slate-500">
                        {new Date(message.createdAt).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </div>
                    </div>
                    <p className="text-slate-600 mt-4 whitespace-pre-line">{message.message}</p>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
