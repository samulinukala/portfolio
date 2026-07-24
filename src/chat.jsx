
import React from "react";
import {useEffect, useState,useRef} from "react";
import { CookiesProvider, useCookies } from 'react-cookie';
async function getChatLog() {
  const url = "https://portfolio-backend-tur1.onrender.com/api/chat"
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function Chat() {
  const [chatData, setChatData] = useState([]);
  const [message, setMessage] = useState('');
  const messagesTopRef = useRef(null);

  const handleInputChange = (event) => { setMessage(event.target.value); }

  useEffect(() => {
    const chatTimer = setInterval(() => {
      getChatLog().then((d) => {
       
        setChatData(d);
      })
    }, 1000);
    return () => clearInterval(chatTimer);
  }, []);

  // Auto-scroll to top of chat when new messages arrive
  useEffect(() => {
    messagesTopRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatData]);

  const handleSendMessage = () => {
    event.preventDefault();
    if (!message.trim()) return;
    const url = "https://portfolio-backend-tur1.onrender.com/api/chat/sendMessage/" + encodeURIComponent(message);
    fetch(url, {
      method: 'PUT', credentials: "include"
    });
    setMessage(''); // Clear input
  }

  const getUsernameColor = (username) => {
    if (!username) return 'text-indigo-400';
    const hash = username.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const colors = [
      'text-indigo-400',
      'text-pink-400',
      'text-emerald-400',
      'text-sky-400',
      'text-amber-400',
      'text-violet-400',
      'text-rose-400',
      'text-teal-400'
    ];
    return colors[hash % colors.length];
  };

  return (
    <div className="w-full flex flex-col  h-[84vh] border-t ">
      {/* Header */}
      <div className="px-6 py-4 bg-slate-700 flex items-center justify-between ">
        <div>
          <h1 className="text-xl font-bold text-white tracking-wide">Live Chat</h1>
          <p className="text-xs text-slate-400 mt-0.5 flex items-center gap-1.5">
          
          </p>
        </div>
      </div>

      {/* Backend notice */}
      <div className="bg-slate-800 px-6 py-2.5 border-b border-slate-800/50 text-xs text-indigo-300/90 flex items-start gap-2">
        <span className="text-sm leading-none mt-0.5">ℹ️</span>
        <span>
          Notice: Backend uses Render free tier. First message or chat load might take some seconds to start due to server cold start.
        </span>
      </div>

      {/* Message Feed */}
      <div className="flex-1 p-6 space-y-4  scroll-smooth">
        {chatData.length === 0 ? (
          <div className=" flex flex-col items-center justify-center h-full text-slate-400 space-y-2">
            <svg className=" w-10 h-10 animate-pulse text-indigo-500/50"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path  strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <p className="text-sm">Connecting ...</p>
          </div>
        ) : (
          chatData.map((m, index) => (
            <div
              key={index}
              ref={index === 0 ? messagesTopRef : null}
              className="flex flex-col space-y-1"
            >
              <div className="flex items-center space-x-2">
                <span className={`text-xs font-semibold ${getUsernameColor(m.un)}`}>
                  {m.un || 'Anonymous'}
                </span>
              </div>
              <div className="max-w-[70%] self-end bg-slate-900 border border-slate-800 text-slate-200 px-4 py-2.5 rounded-2xl rounded-tl-none shadow-md transition-all duration-200 hover:border-slate-700">
                <p className="text-sm whitespace-pre-wrap break-words">{m.message}</p>
              </div>
            </div>
          ))
        )}
       
      </div>

      {/* Input Bar - Docked */}
      <div className="sticky bottom-0 w-full bg-slate-700 border-t border-slate-800 z-10">
        <form onSubmit={handleSendMessage} className="max-w-6xl mx-auto flex items-center gap-2 p-4">
          <input
            type="text"
            maxLength={70}
            className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-3.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
            placeholder="Type your message..."
            value={message}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-medium px-6 py-3.5 rounded-xl text-sm transition-all shadow-lg hover:shadow-indigo-500/20 flex items-center gap-1.5 cursor-pointer"
          >
            <span>Send</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  )
}
export default Chat