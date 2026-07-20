import React, { useState, useEffect } from 'react';

const Forum = () => {
  const [topics, setTopics] = useState([]);
  const [posts, setPosts] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);
  const [renderView, setRenderView] = useState(0); // 0: Topics, 1: Posts, 2: Open Post, 3: Create Post
  const [postText, setPostText] = useState("");
  const [postHeader, setPostHeader] = useState("");
  const [postTopic, setPostTopic] = useState("");
  
  // Status & Feedback States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [isLoadingTopics, setIsLoadingTopics] = useState(false);
  const [isLoadingPosts, setIsLoadingPosts] = useState(false);

  // Fetch topics when the component mounts
  const fetchTopics = async () => {
    setIsLoadingTopics(true);
    try {
      const response = await fetch("https://portfolio-backend-tur1.onrender.com/api/forum/listTopics");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setTopics(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Failed to fetch topics:", error);
      setTopics([]); // Clear topics on failure
    } finally {
      setIsLoadingTopics(false);
    }
  };

  useEffect(() => {
    fetchTopics();
  }, []);

  const handleTopicSelect = async (topicName) => {
    setSelectedTopic(topicName);
    setIsLoadingPosts(true);
    setRenderView(1);
    try {
      const response = await fetch("https://portfolio-backend-tur1.onrender.com/api/forum/retrivePostByTopic/" + topicName);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const tmpPosts = await response.json();
      setPosts(Array.isArray(tmpPosts) ? tmpPosts : []);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
      setPosts([]);
    } finally {
      setIsLoadingPosts(false);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const response = await fetch("https://portfolio-backend-tur1.onrender.com/api/forum/postMessage", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          header: postHeader,
          text: postText,
          topic: postTopic,
        })
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setPostHeader("");
        setPostText("");
        
        // Refresh topics list so the new post's topic is there
        await fetchTopics();

        // If we are posting to the currently selected topic, refresh its posts list too
        if (postTopic === selectedTopic) {
          try {
            const postsResponse = await fetch("https://portfolio-backend-tur1.onrender.com/api/forum/retrivePostByTopic/" + selectedTopic);
            if (postsResponse.ok) {
              const tmpPosts = await postsResponse.json();
              setPosts(Array.isArray(tmpPosts) ? tmpPosts : []);
            }
          } catch (err) {
            console.error("Failed to refresh posts:", err);
          }
        }

        // Navigate back to the topic page if posting to selectedTopic, else go to topics list
        setTimeout(() => {
          if (postTopic === selectedTopic) {
            setRenderView(1);
          } else {
            setRenderView(0);
          }
          setSubmitStatus(null);
        }, 1500);

      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Failed to submit post:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Kept interface intact
  function deletePost(id) {
    fetch("https://portfolio-backend-tur1.onrender.com/api/forum/deletePost", {});
  }

  return (
    <div className="p-4 sm:p-8 max-w-4xl mx-auto">
      {/* Page Title */}
      <div className="mb-8 text-center sm:text-left">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-500 bg-clip-text text-transparent">
          Developer Sandbox Forum
        </h1>
        <p className="text-slate-400 mt-2 text-sm sm:text-base">
          Share your ideas, ask questions, or explore the sandbox workspace with the developer community.
        </p>
      </div>

      {/* Main Forum Card Container */}
      <div className="bg-slate-800/60 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-xl border border-slate-700/60 transition-all duration-300">
        
        {/* Breadcrumb Navigation */}
        <div className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-slate-400 mb-6 bg-slate-900/40 px-3 py-1.5 rounded-xl border border-slate-700/30 w-fit">
          <span 
            className="hover:text-indigo-400 cursor-pointer transition-colors font-medium"
            onClick={() => { setRenderView(0); setSelectedPost(null); }}
          >
            Forum
          </span>
          <span className="text-slate-600">/</span>
          <span 
            className={`transition-colors font-medium ${renderView > 0 ? "hover:text-indigo-400 cursor-pointer" : "text-slate-300 font-semibold"}`}
            onClick={() => { if (renderView > 0) { setRenderView(0); setSelectedPost(null); } }}
          >
            Topics
          </span>
          {renderView >= 1 && selectedTopic && (
            <>
              <span className="text-slate-600">/</span>
              <span 
                className={`transition-colors font-medium truncate max-w-[120px] ${renderView > 1 ? "hover:text-indigo-400 cursor-pointer" : "text-slate-300 font-semibold"}`}
                onClick={() => { if (renderView > 1) { setRenderView(1); setSelectedPost(null); } }}
              >
                {selectedTopic}
              </span>
            </>
          )}
          {renderView === 2 && selectedPost && (
            <>
              <span className="text-slate-600">/</span>
              <span className="text-indigo-400 font-semibold truncate max-w-[150px]">
                {selectedPost.title || selectedPost.header || "Details"}
              </span>
            </>
          )}
          {renderView === 3 && (
            <>
              <span className="text-slate-600">/</span>
              <span className="text-indigo-400 font-semibold">
                Create Post
              </span>
            </>
          )}
        </div>

        {/* ==================== VIEW 0: TOPICS LIST ==================== */}
        {renderView === 0 && (
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-700/50 mb-6">
              <div>
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                  Discussion Categories
                </h2>
                <p className="text-slate-400 text-sm mt-0.5">Explore active discussions by category.</p>
              </div>
              <button 
                onClick={() => { setPostTopic(''); setRenderView(3); }} 
                className="flex items-center justify-center gap-1.5 bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white font-bold px-4 py-2.5 rounded-xl shadow-lg shadow-indigo-500/10 hover:shadow-indigo-500/20 transition-all duration-300 cursor-pointer text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Create a Post
              </button>
            </div>

            {isLoadingTopics ? (
              <div className="space-y-3 py-6">
                <div className="h-16 bg-slate-700/30 rounded-xl animate-pulse w-full"></div>
                <div className="h-16 bg-slate-700/30 rounded-xl animate-pulse w-full"></div>
                <div className="h-16 bg-slate-700/30 rounded-xl animate-pulse w-full"></div>
              </div>
            ) : topics.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {topics.map((topic, index) => (
                  <button
                    key={index}
                    className="flex items-center justify-between bg-slate-800/40 hover:bg-slate-800/90 border border-slate-700/50 hover:border-indigo-500/50 p-4 sm:p-5 rounded-2xl cursor-pointer text-left group transition-all duration-300 w-full"
                    onClick={() => handleTopicSelect(topic)}
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300 shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-slate-100 font-bold text-base group-hover:text-indigo-300 transition-colors duration-200">
                          {topic}
                        </h4>
                        <p className="text-slate-400 text-xs mt-0.5 group-hover:text-slate-300 transition-colors">
                          Explore discussions and news
                        </p>
                      </div>
                    </div>
                    <svg className="w-5 h-5 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-slate-900/20 rounded-2xl border border-dashed border-slate-700/50">
                <svg className="w-12 h-12 text-slate-600 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0a2 2 0 01-2 2H6a2 2 0 01-2-2m16 0V9a2 2 0 00-2-2H6a2 2 0 00-2 2v2m16 4h-2a2 2 0 00-2 2v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3a2 2 0 00-2-2H2" />
                </svg>
                <p className="text-slate-400 font-medium text-lg">No discussion topics found</p>
                <p className="text-slate-500 text-sm mt-1">Be the first to start a conversation!</p>
              </div>
            )}
          </div>
        )}

        {/* ==================== VIEW 1: POSTS LIST IN TOPIC ==================== */}
        {renderView === 1 && (
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-700/50 mb-6">
              <button 
                onClick={() => setRenderView(0)} 
                className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white px-4 py-2 rounded-xl text-sm font-semibold border border-slate-700 transition-all duration-300 cursor-pointer self-start"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Topics
              </button>
              <button 
                onClick={() => { setPostTopic(selectedTopic); setRenderView(3); }} 
                className="flex items-center justify-center gap-1.5 bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white font-bold px-4 py-2.5 rounded-xl shadow-lg shadow-indigo-500/10 hover:shadow-indigo-500/20 transition-all duration-300 cursor-pointer text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Post in this Topic
              </button>
            </div>

            <div className="bg-gradient-to-r from-indigo-950/60 to-slate-900 border border-slate-700/50 p-6 rounded-2xl mb-6 shadow-lg flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-full">
                  Topic Category
                </span>
                <h3 className="text-2xl font-extrabold text-white mt-2">
                  {selectedTopic || "Select a topic"}
                </h3>
              </div>
              <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-2xl hidden sm:block">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
            </div>

            {isLoadingPosts ? (
              <div className="space-y-3 py-6">
                <div className="h-16 bg-slate-700/30 rounded-xl animate-pulse w-full"></div>
                <div className="h-16 bg-slate-700/30 rounded-xl animate-pulse w-full"></div>
              </div>
            ) : posts.length > 0 ? (
              <div className="space-y-3">
                {posts.map((post, index) => (
                  <button
                    key={index}
                    className="flex items-center justify-between bg-slate-800/40 hover:bg-slate-800/90 border border-slate-700/50 hover:border-violet-500/50 p-4 sm:p-5 rounded-2xl cursor-pointer text-left group transition-all duration-300 w-full"
                    onClick={() => {
                      setSelectedPost(post);
                      setRenderView(2);
                    }}
                  >
                    <div className="flex items-center gap-4 min-w-0 flex-1">
                      <div className="p-3 bg-violet-500/10 text-violet-400 rounded-xl group-hover:bg-violet-500 group-hover:text-white transition-all duration-300 shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div className="min-w-0 flex-1 pr-4">
                        <h4 className="text-slate-100 font-bold text-base group-hover:text-violet-300 transition-colors duration-200 truncate">
                          {post.title || post.header || "Untitled Post"}
                        </h4>
                        {post.text && (
                          <p className="text-slate-400 text-sm mt-0.5 group-hover:text-slate-300 transition-colors truncate max-w-xl">
                            {post.text}
                          </p>
                        )}
                      </div>
                    </div>
                    <svg className="w-5 h-5 text-slate-500 group-hover:text-violet-400 group-hover:translate-x-1 transition-all duration-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-slate-900/20 rounded-2xl border border-dashed border-slate-700/50">
                <svg className="w-12 h-12 text-slate-600 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <p className="text-slate-400 font-medium text-lg">No posts in this category yet</p>
                <p className="text-slate-500 text-sm mt-1">Be the first to share something interesting here!</p>
              </div>
            )}
          </div>
        )}

        {/* ==================== VIEW 2: OPENED POST DETAIL ==================== */}
        {renderView === 2 && (
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-700/50 mb-6">
              <div className="flex flex-wrap gap-2">
                <button 
                  onClick={() => setRenderView(1)} 
                  className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold border border-slate-700 transition-all duration-300 cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to List
                </button>
                <button 
                  onClick={() => setRenderView(0)} 
                  className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold border border-slate-700 transition-all duration-300 cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  All Topics
                </button>
              </div>
              <button 
                onClick={() => { setPostTopic(selectedTopic); setRenderView(3); }} 
                className="flex items-center justify-center gap-1.5 bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white font-bold px-4 py-2 rounded-xl shadow-lg shadow-indigo-500/10 hover:shadow-indigo-500/20 transition-all duration-300 cursor-pointer text-xs sm:text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Create a Post
              </button>
            </div>

            {selectedPost && (
              <div className="space-y-6">
                {/* Meta details header */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 rounded-full flex items-center justify-center font-bold text-xl shrink-0">
                    {(selectedPost.header || selectedPost.title || "A")[0].toUpperCase()}
                  </div>
                  <div className="min-w-0">
                    <span className="inline-block text-xs font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded-full mb-1">
                      {selectedTopic || "General"}
                    </span>
                    <h2 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                      {selectedPost.header || selectedPost.title || "Untitled Post"}
                    </h2>
                  </div>
                </div>

                <div className="border-t border-slate-700/50 my-6"></div>

                {/* Main Post Text Content */}
                <div className="bg-slate-900/50 rounded-xl p-5 sm:p-6 border border-slate-800 text-slate-300 leading-relaxed text-sm sm:text-base whitespace-pre-wrap font-medium shadow-inner">
                  {selectedPost.text || "No content available."}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ==================== VIEW 3: CREATE POST FORM ==================== */}
        {renderView === 3 && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-700/50">
              <div>
                <h2 className="text-2xl font-bold text-white">Create a New Post</h2>
                <p className="text-slate-400 text-sm mt-1">Start a conversation in our community workspace.</p>
              </div>
              <button 
                onClick={() => setRenderView(0)} 
                className="self-start sm:self-auto flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white px-4 py-2 rounded-xl text-sm font-semibold border border-slate-700 transition-all duration-300 cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Cancel
              </button>
            </div>

            {submitStatus === 'success' && (
              <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-4 rounded-xl flex items-center shadow-lg animate-fade-in">
                <svg className="w-6 h-6 text-emerald-400 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="font-bold">Post Created Successfully!</h4>
                  <p className="text-sm text-emerald-400/90 mt-0.5">Your message has been posted. Redirecting...</p>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-rose-500/10 border border-rose-500/30 text-rose-400 p-4 rounded-xl flex items-center shadow-lg animate-fade-in">
                <svg className="w-6 h-6 text-rose-400 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <div>
                  <h4 className="font-bold">Failed to Create Post</h4>
                  <p className="text-sm text-rose-400/90 mt-0.5">Something went wrong. Please check your inputs and try again.</p>
                </div>
              </div>
            )}

            <form onSubmit={onSubmit} className="space-y-5">
              <div>
                <label className="block text-slate-300 font-semibold text-sm mb-2">Category / Topic</label>
                <input 
                  type="text" 
                  value={postTopic}
                  onChange={e => setPostTopic(e.currentTarget.value)} 
                  required 
                  name="topic" 
                  placeholder="e.g. General, Suggestions, Help..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all font-medium"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold text-sm mb-2">Post Title</label>
                <input 
                  type="text" 
                  value={postHeader}
                  onChange={e => setPostHeader(e.currentTarget.value)} 
                  required 
                  name="title" 
                  placeholder="Give your discussion a clear, descriptive title"
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all font-medium"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold text-sm mb-2">Post Content</label>
                <textarea 
                  value={postText}
                  onChange={e => setPostText(e.currentTarget.value)} 
                  required 
                  name="text" 
                  placeholder="What's on your mind? Write your post body here..."
                  rows={6}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all leading-relaxed font-sans font-medium"
                />
              </div>

              <div className="pt-2 flex justify-end">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/15 hover:shadow-indigo-500/30 transition-all duration-300 disabled:opacity-50 cursor-pointer w-full sm:w-auto`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : "Publish Post"}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Forum;
