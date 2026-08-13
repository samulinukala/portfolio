import { useState, useEffect } from "react";
import NavbarButton from './navbarbutton.jsx';


function LoginPage(props) {
    const [username, setUsername] = useState(""); // Initialize with empty string
    const [password, setPassword] = useState(""); // Initialize with empty string
    const [isLoading, setIsLoading] = useState(false); // State for loading feedback
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

    const onSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch("https://portfolio-backend-tur1.onrender.com/api/users/login",
                  {
                      method: 'POST',
                      body: JSON.stringify({ username: username, password: password }), 
                      credentials: 'include',
                      headers: { 'Content-Type': 'application/json' }
                  });

            const data = await response.json();

            if (!response.ok) {
                // Handle HTTP errors like 401 Unauthorized
                throw new Error(data.message || `Login failed with status: ${response.status}`);
            }

            // Success path (assuming backend returns user info or a token on success)
            console.log("Login successful:", data);
            alert(`Success! Welcome back. Check console for response details.`);

        } catch (error) {
            console.error("Login error:", error);
            alert(`Login failed: ${error.message || "Please check your credentials and try again."}`);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="min-h-screen w-full p-8 bg-indigo-400 shadow-lg rounded-xl">
            <h1 className='text-4xl mb-4 text-center font-extrabold text-white'>Login</h1>

            {/* Server status indicator */}
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
            
            <form onSubmit={onSubmit}>
                {/* Username Field Group */}
                <div className="mb-6">
                    <label htmlFor="username" className="block text-lg font-medium text-gray-700 mb-2">Username</label>
                    <input 
                        id="username"
                        maxLength={18}
                        className='w-full p-3 text-white border placeholder-amber-100/80 bg-gray-600 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-xl' 
                        type='text' 
                        onChange={e => setUsername(e.currentTarget.value)} 
                        placeholder="username"
                        required
                    />
                </div>

                {/* Password Field Group */}
                <div className="mb-8">
                    <label htmlFor="password" className="block text-lg font-medium text-gray-700 mb-2">Password</label>
                    <input 
                        id="password"
                        maxLength={31}
                        className='w-full p-3 border text-white placeholder-amber-100/80 bg-gray-600 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-xl' 
                        type='password' 
                        onChange={e => setPassword(e.currentTarget.value)} 
                        placeholder="password"
                        required
                    />
                </div>

                <button 
                    className={`w-full py-3 text-2xl font-semibold rounded-lg transition duration-150 flex items-center justify-center gap-3 ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'} text-gray-300`} 
                    type='submit'
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <>
                            <svg className="animate-spin h-7 w-7 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span>Logging In...</span>
                        </>
                    ) : (
                        'Login'
                    )}
                </button>
            </form>

            <div className="mt-8 flex justify-center">
                <button 
                    className='px-6 py-2 text-lg text-white bg-pink-500 hover:bg-pink-600 rounded-full shadow transition duration-150'
                    onClick={() => {
                        fetch("https://portfolio-backend-tur1.onrender.com/api/test/readCookie",
                              { credentials: 'include', method: 'GET' })
                          .then((d) => {
                            console.log(d);
                            alert("Cookie test triggered (check console)");
                          })
                    }}>
                    Test Cookie
                </button>
            </div>

            <div className="mt-6 text-center">
                 <NavbarButton 
                    className='text-xl' 
                    Text="Don't have an account? Sign Up" 
                    num={5} 
                    changefunc={props.setPage}
                />
            </div>

        </div>
    );
}
export default LoginPage;

