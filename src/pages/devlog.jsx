import React, { useState } from 'react';

const LOG_ENTRIES = [
  {
    id: 'entry-1',
    title: 'Forum progress',
    date: '20.7.2026',
    category: 'Backend & UI',
    icon: '💬',
    theme: {
      cardBg: 'from-violet-950/90 via-purple-900/80 to-indigo-950/90',
      border: 'border-violet-500/40 hover:border-violet-300',
      tagBg: 'bg-violet-500/20 text-violet-300 border-violet-500/30',
      titleColor: 'text-violet-300',
      glow: 'shadow-violet-900/50',
      dotBg: 'bg-violet-400 ring-violet-500/50'
    },
    paragraphs: [
      "The backend was quite easy to make work on a few commits and it got going. The front end was quite a bit more difficult to get going. The main problem was how to design the post data to be usable for the ui. I had to make decisions on what fields to have on the part that goes into the database. I settled on having the topic stored in the post data. So there are no separate categories stored on the database just on the posts. This should be improved by making the topics fixed to specific ones instead of being more free form.",
      "As for the next part of this project I am not sure. I feel I should maybe work on adding a moderation system for the backend or maybe think of something else I have an environment to play in now."
    ]
  },
  {
    id: 'entry-2',
    title: 'AI and UI',
    date: '6.7.2026',
    category: 'AI & Workflow',
    icon: '🤖',
    theme: {
      cardBg: 'from-fuchsia-950/90 via-pink-900/80 to-rose-950/90',
      border: 'border-fuchsia-500/40 hover:border-fuchsia-300',
      tagBg: 'bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/30',
      titleColor: 'text-fuchsia-300',
      glow: 'shadow-fuchsia-900/50',
      dotBg: 'bg-fuchsia-400 ring-fuchsia-500/50'
    },
    paragraphs: [
      "I have tried using an AI model for coding. I tried multiple different models. As with all of this site I needed it to be free. So I have started using Gemma4 and it is making website coding much more fun. I feel I lack a bit of working knowledge of webdevelopment and it does patch my expertise eerily well. It is quite manual still as I have to guide the model quite tightly. Most problems came from the model having too short of a response. I made a config file that made it have unlimited response length. That made it quite useful.",
      "On the UI front I have been working on improving the chat and gallery with AI; it took a few days. Quite fast. I am worried about technical debt that might accumulate but using a local model does ease my nerves a bit. I do love local models at least.",
      "The next hurdle will continue work on the JWT token reading and usage for forum. That will make the UI more responsive as it will show if the user is logged in. The forum page has a placeholder currently. I might look back at the replyke components but it might be more trouble than it is worth trying to modify it to fit my purpose. The register page could use a verification for the password when making an account and both could use regex verification I guess that will be on the backburner for now."
    ]
  },
  {
    id: 'entry-3',
    title: 'Nominal progress report',
    date: '9.6.2026',
    category: 'Milestones',
    icon: '✨',
    theme: {
      cardBg: 'from-emerald-950/90 via-teal-900/80 to-emerald-900/90',
      border: 'border-emerald-500/40 hover:border-emerald-300',
      tagBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      titleColor: 'text-emerald-300',
      glow: 'shadow-emerald-900/50',
      dotBg: 'bg-emerald-400 ring-emerald-500/50'
    },
    paragraphs: [
      "The account creation works now and shows the username in chat. So for the first time the site is doing something useful with the frontend, backend and database all communicating. A milestone in a long and rocky road.",
      "The next part will focus on improving the frontend. Currently the frontend is not giving any feedback on any actions which makes the experience quite bare."
    ]
  },
  {
    id: 'entry-4',
    title: 'A momentous event has transpired',
    date: '17.4.2026',
    category: 'Chat & Backend',
    icon: '🚀',
    theme: {
      cardBg: 'from-amber-950/90 via-orange-900/80 to-yellow-950/90',
      border: 'border-amber-500/40 hover:border-amber-300',
      tagBg: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
      titleColor: 'text-amber-300',
      glow: 'shadow-amber-900/50',
      dotBg: 'bg-amber-400 ring-amber-500/50'
    },
    paragraphs: [
      "The chat works now. WOOOOOO! The site's backend is on a site named Render which has a completely free tier which I am a sucker for. The chat section can now read the chat and send messages. Major progress.",
      "Although it does just show it as JSON which is rather ugly and the message can't be sent with enter and login functionality from the backend is not implemented. Damn you self-criticism I am doing internet magic leave me be.",
      "The next part will be making the chat presentable and make the login work. I wonder how many vulnerabilities the chat leaves for the server. I really ought to sanitize the inputs. Although form over function is quite a popular sentiment."
    ]
  },
  {
    id: 'entry-5',
    title: 'Backend progress',
    date: '17.4.2026',
    category: 'Backend',
    icon: '🛠️',
    theme: {
      cardBg: 'from-blue-950/90 via-sky-900/80 to-indigo-950/90',
      border: 'border-blue-500/40 hover:border-blue-300',
      tagBg: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      titleColor: 'text-blue-300',
      glow: 'shadow-blue-900/50',
      dotBg: 'bg-blue-400 ring-blue-500/50'
    },
    paragraphs: [
      "The progress to make HTTP routes has been chaotic coming from the fact that it's my first time doing it. I had functions that were able to verify password against the database. At first I added HTTP routes for login. The main problem became my inexperience with JavaScript. There was a missing parenthesis on the backend that caused the route not to work. I am rather spoiled when comes to my syntax highlighting. Having coded C# where the compiler immediately yells at you for missing anything is quite a change. I feel that missing that instant feedback forces me to develop new solutions. Currently my go-to solution is to fail at debugging for several days and then feed the function to Gemini to find the syntax error.",
      "I had minor issues with async functions from not dealing with them before. I finished the login functionality and it even returns a signed JWT token. Currently I have no use for it as I have not implemented forum system yet or any logged in functionality. I also finished a chat functionality for the backend that allows user to send simple messages. Currently it is untested as it is stuck on the API.",
      "Next part of development process will focus on the frontend and connecting frontend to the backend. The chat functionality seems like a good target. I need to find a way to host the backend but currently I have no idea on how to do it. I assume after figuring out how to connect the halves I will work on the chat room feature. Express sessions seemed quite promising avenue to study."
    ]
  },
  {
    id: 'entry-6',
    title: 'Separating App.tsx to multiple parts, cookies and login progress',
    date: '13.3.2026',
    category: 'Architecture',
    icon: '⚡',
    theme: {
      cardBg: 'from-cyan-950/90 via-teal-900/80 to-blue-950/90',
      border: 'border-cyan-500/40 hover:border-cyan-300',
      tagBg: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
      titleColor: 'text-cyan-300',
      glow: 'shadow-cyan-900/50',
      dotBg: 'bg-cyan-400 ring-cyan-500/50'
    },
    paragraphs: [
      "Currently the backend can connect to the database and can compare given text password to the stored hash and return true if the password is correct. It can also compare if username exists and create users. So basic CRUD operations work on the local version. It is quite imperative to soon find a hosting solution for the node backend so I can get to working on connecting the backend.",
      "I finally realized that the App file had grown unwieldy and became too long. So components were moved from it to separate files. While making this first log I can already tell I want a better solution for writing it.",
      "The current login system at the time is planned to use cookies for storing the user login. So a cookie disclosure is added to site. Currently the close disclosure button doesn't work so it will be disabled for the build. The login forms seem quite daunting or the example code for it was overly complicated. Regardless it has to be designed. The current log in screen is quite ugly. I should find literature on color theory."
    ]
  }
];

function DevLog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedEntries, setExpandedEntries] = useState({});

  const categories = ['All', ...new Set(LOG_ENTRIES.map(e => e.category))];

  const toggleExpand = (id) => {
    setExpandedEntries(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredEntries = LOG_ENTRIES.filter(entry => {
    const matchesCategory = selectedCategory === 'All' || entry.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      entry.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.paragraphs.some(p => p.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pb-24 pt-6 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-12 relative">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-teal-300 via-indigo-300 to-fuchsia-300 bg-clip-text text-transparent mb-4">
          Devlog
        </h1>
        <p className="text-indigo-200 text-lg max-w-2xl mx-auto font-light">
         Hear from the horses mouth how the project is progressing and the future steps for it.
        </p>

        {/* Stats Summary Bar */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
          <div className="bg-violet-950/40 border border-violet-500/20 rounded-xl p-3 backdrop-blur-sm">
            <div className="text-2xl font-bold text-violet-300">{LOG_ENTRIES.length}</div>
            <div className="text-xs text-indigo-300/70">Total Logs</div>
          </div>
          <div className="bg-fuchsia-950/40 border border-fuchsia-500/20 rounded-xl p-3 backdrop-blur-sm">
            <div className="text-2xl font-bold text-fuchsia-300">July 2026</div>
            <div className="text-xs text-indigo-300/70">Latest Entry</div>
          </div>
          <div className="bg-emerald-950/40 border border-emerald-500/20 rounded-xl p-3 backdrop-blur-sm">
            <div className="text-2xl font-bold text-emerald-300">Node.js</div>
            <div className="text-xs text-indigo-300/70">Backend</div>
          </div>
          <div className="bg-cyan-950/40 border border-cyan-500/20 rounded-xl p-3 backdrop-blur-sm">
            <div className="text-2xl font-bold text-cyan-300">Vite + React</div>
            <div className="text-xs text-indigo-300/70">Stack Engine</div>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="mb-10 bg-slate-900/60 border border-indigo-500/20 rounded-2xl p-4 sm:p-5 backdrop-blur-md shadow-xl flex flex-col md:flex-row gap-4 justify-between items-center">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 border ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white border-indigo-400 shadow-lg shadow-indigo-600/30 scale-105'
                  : 'bg-indigo-950/40 text-indigo-300 border-indigo-800/40 hover:bg-indigo-900/60 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="Search devlogs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-indigo-950/60 border border-indigo-700/40 rounded-xl px-4 py-2 text-sm text-indigo-100 placeholder-indigo-400/60 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-2.5 text-xs text-indigo-400 hover:text-white"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Timeline List */}
      <div className="relative border-l-2 border-indigo-500/20 ml-4 sm:ml-8 space-y-8">
        {filteredEntries.length === 0 ? (
          <div className="text-center py-16 bg-indigo-950/20 border border-indigo-800/30 rounded-2xl">
            <p className="text-indigo-300 text-lg font-medium">No devlog entries found</p>
            <p className="text-indigo-400/70 text-sm mt-1">Try clearing your search query or filter selection.</p>
          </div>
        ) : (
          filteredEntries.map((entry) => {
            const isExpanded = expandedEntries[entry.id];
            const hasMultipleParagraphs = entry.paragraphs.length > 1;

            return (
              <div key={entry.id} className="relative pl-6 sm:pl-10 group">
                {/* Timeline Dot Node */}
                <div 
                  className={`absolute -left-[17px] top-6 w-8 h-8 rounded-full flex items-center justify-center text-sm shadow-md ring-4 ${entry.theme.dotBg} transition-transform group-hover:scale-125 duration-300`}
                >
                  <span>{entry.icon}</span>
                </div>

                {/* Whimsical Card */}
                <div 
                  className={`bg-gradient-to-br ${entry.theme.cardBg} border ${entry.theme.border} rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-xl ${entry.theme.glow} transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl`}
                >
                  {/* Card Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4 border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${entry.theme.tagBg}`}>
                        {entry.category}
                      </span>
                      <h2 className={`text-2xl font-bold tracking-tight ${entry.theme.titleColor}`}>
                        {entry.title}
                      </h2>
                    </div>
                    <span className="text-xs font-mono text-white/90 bg-black/30 border border-white/10 px-3 py-1 rounded-lg">
                      🗓️ {entry.date}
                    </span>
                  </div>Hello. I am learning webdevelopment and I have started to make this website to improve my skills. it will slowly improve over time. It uses React framework for the components. It uses Vite for building the site. I also draw so I added an gallery as chalenge. The chat currently works but takes a while to start. Time will tell how it will pan out.I am hoping to make it a sort of showcase for my stuff and what I have done. Time will tell how it will pan out.

                  {/* Card Content */}
                  <div className="space-y-4 text-indigo-100 text-base leading-relaxed font-light">
                    {/* First Paragraph Always Visible */}
                    <p>{entry.paragraphs[0]}</p>

                    {/* Remaining Paragraphs (Collapsible if multiple) */}
                    {hasMultipleParagraphs && (
                      <>
                        {isExpanded ? (
                          entry.paragraphs.slice(1).map((p, idx) => (
                            <p key={idx} className="pt-1">{p}</p>
                          ))
                        ) : null}

                        <button
                          onClick={() => toggleExpand(entry.id)}
                          className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-teal-300 hover:text-teal-100 underline decoration-teal-400/40 hover:decoration-teal-200 transition"
                        >
                          {isExpanded ? 'Show less ▲' : `Read full log (${entry.paragraphs.length - 1} more paragraph${entry.paragraphs.length > 2 ? 's' : ''}) ▼`}
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default DevLog;
