import React, { useState, useEffect } from "react";
/* Server status indicator */
const ServerStatusIndicator = () => {
            const [serverStatus, setServerStatus] = useState("checking"); // "checking" | "online" | "offline"

                 useEffect(() => {
                        let isCancelled = false;
                        let timerId = null;
                
                        const checkServer = async () => {
                            try {
                                await fetch("https://portfolio-backend-tur1.onrender.com/");
                                if (!isCancelled) {
                                    setServerStatus("online");
                                }
                            } catch (err) {
                                console.error("Server check error, retrying in 3s...", err);
                                if (!isCancelled) {
                                    setServerStatus("offline");
                                    timerId = setTimeout(checkServer, 3000);
                                }
                            }
                        };
                
                        checkServer();
                
                        return () => {
                            isCancelled = true;
                            if (timerId) clearTimeout(timerId);
                        };
                    }, []);

  return (
            <div className="flex justify-center items-center gap-2 mb-6">
              <span className="text-sm font-medium text-white/90">Server Status:</span>
              {serverStatus === "checking" && (
                <span className="flex items-center gap-1.5 text-yellow-200 text-sm bg-yellow-900/40 px-3 py-1 rounded-full border border-yellow-500/30">
                  <svg className="animate-spin h-4 w-4 text-yellow-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Checking server...
                </span>
              )}
              {serverStatus === "online" && (
                <span className="flex items-center gap-1.5 text-emerald-200 text-sm bg-emerald-900/50 px-3 py-1 rounded-full border border-emerald-500/40 font-semibold">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Server Online ✓
                </span>
              )}
              {serverStatus === "offline" && (
                <span className="flex items-center gap-1.5 text-red-200 text-sm bg-red-900/50 px-3 py-1 rounded-full border border-red-500/40 font-semibold">
                  <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  Server starting please wait
                </span>
              )}
            </div>
  );
};
            export default ServerStatusIndicator;