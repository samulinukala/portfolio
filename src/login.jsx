import { useState } from "react";
import NavbarButton from './navbarbutton.jsx';


function LoginPage(props) {
    const [username, setUsername] = useState(""); // Initialize with empty string
    const [password, setPassword] = useState(""); // Initialize with empty string
    const [isLoading, setIsLoading] = useState(false); // State for loading feedback

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
            <h1 className='text-4xl mb-8 text-center font-extrabold text-white'>Login</h1>
            
            <form onSubmit={onSubmit}>
                {/* Username Field Group */}
                <div className="mb-6">
                    <label htmlFor="username" className="block text-lg font-medium text-gray-700 mb-2">Username</label>
                    <input 
                        id="username"
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
                        className='w-full p-3 border text-white placeholder-amber-100/80 bg-gray-600 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-xl' 
                        type='password' 
                        onChange={e => setPassword(e.currentTarget.value)} 
                        placeholder="password"
                        required
                    />
                </div>

                <button 
                    className={`w-full py-3 text-2xl font-semibold rounded-lg transition duration-150 ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'} text-gray-300`} 
                    type='submit'
                    disabled={isLoading}
                >
                    {isLoading ? 'Logging In...' : 'Login'}
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
