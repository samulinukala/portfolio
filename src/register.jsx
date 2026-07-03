import { useState,useRef } from "react";
import NavbarButton from './navbarbutton.jsx';



function RegisterPage(props) {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  
  const onSubmit = (e) => {
    alert("trying to create account");
    e.preventDefault();
    async function createUser() {
      fetch("https://portfolio-backend-tur1.onrender.com/api/users/createUser",
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' }, credentials: 'include',
          body: JSON.stringify({ parameter1: username, parameter2: password })
        })
    }
    createUser();
  }

  return (
    <div className="min-h-screen w-full p-8 bg-indigo-400 shadow-lg rounded-xl">
        <h1 className='text-4xl mb-8 text-center font-extrabold text-white'>Create Account</h1>
      <form onSubmit={onSubmit}>
            {/* Username Field Group */}
            <div className="mb-6">
                <label htmlFor="username" className="block text-lg font-medium text-gray-700 mb-2">Username</label>
                <input
                    id="username"
                    className='w-full p-3 border bg-gray-600 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-xl placeholder-amber-100/80'
                    type='text'
                    onChange={e => setUsername(e.currentTarget.value)}
                    placeholder="Enter your desired username"
                    required
                />
    </div>

            {/* Password Field Group */}
            <div className="mb-8">
                <label htmlFor="password" className="block text-lg font-medium text-gray-700 mb-2">Password</label>
                <input
                    id="password"
                    className='w-full p-3 border bg-gray-600 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-xl placeholder-amber-100/80'
                    type='password'
                    onChange={e => setPassword(e.currentTarget.value)}
                    placeholder="Think of a strong password"
                    required
                />
            </div>

            <button
                className={`w-full py-3 text-2xl font-semibold rounded-lg transition duration-150 ${'bg-green-600 hover:bg-green-700'} text-gray-300`}
                type='submit'>
                Register
            </button>
        </form>

        <div className="mt-8 flex justify-center">
             {/* Adjusted NavbarButton placement and styling to match pattern */}
            <NavbarButton
                className='text-xl'
                Text="Already have an account? Sign In"
                num={4} // Assuming num relates to size/style
                changefunc={props.setPage}
            />
        </div>

    </div>
  )
}
export default RegisterPage