
function DevLog()
{
    return(
      <div>
       <h1 className='text-center text-5xl m-10 text-indigo-400' >Devlog</h1>
        <div>
          <h2 className="text-teal-400">A momentous event has transpired</h2>
            <p className="text-indigo-400"> The chat works now. WOOOOOO! The sites backend is on a site named render which has a completely free tier
        which I am a sucker for. The chat section can now read the chat and send messages. Major progress. Alltough it does just show it as JSON which is rather ugly and the message can't be sent with enter and login functionality from the backend is not implemented. Damn you selfcritisism I am doing internet magic leave me be. The next part will be making the chat presentable and make the login work. I wonder how many vulnerabilities the chat leaves for the server. I really ought to sanitize the inputs. Altough form over function is quite a popular sentiment. </p><br></br><p>17.4.2026</p>
        </div>
      <br></br>
        <div>
          <h2 className='text-teal-400'>Backend progress</h2>
          <p className="text-indigo-400"> The progress to make http routes has been chaotic coming from the fact that it's my first time doing it. I had functions that were able to verify password against the database. At first I added http routes for login. The main problem became my inexperience with JavaScript. There was a missing parenthesis on the backend that caused the route not to work. I am rather spoiled when comes to my syntax highlighting. Having coded C# where the compiler immidietly yells at you for missing anything is quite a change. I feel that missing that instant feedback forces me to develop new solutions. Currently my goto solution is to fail at debugging for several days and then feed the function to Gemini to find the syntax error.<br></br> <br></br> I had minor issues with async functions from not dealing with them before. I finished the login functionality and it even returns a signed JWT token. Currently I have no use for it as I have not implemented forum system yet or any logged in functionality. I also finished a chat functionality for the backend that allows user to send simple messages. Currently it is untested as it is stuck on the api.<br></br><br></br> Next part of development process will focus on the frontend and connecting frontend to the backend. The chat functionality seems like a good target. I need to find a way to host the backend but currently I have no idea on how to do it. I assume after figuring out how to connect the halves I will work on the chat room feature. Express sessions seemed quite promising avenue to study.<br></br> 17.4.2026 </p>
        </div>
      <br></br>
        <div>
                   <h2 className='text-teal-400'> Seperating App.tsx to multiple parts, cookies and login progress </h2>
          <p className='text-indigo-400'> Currently the backend can connect to the database and can compare given text password to the stored hash and return true if the password is correct. It can also compare if username exists and create users. So basic crud operations work on the local version. It is quite imperative to soon find a hosting solution for the node backend so I can get to working on connecting the backend.<br></br> <br></br>
          I finally realized that the App file had grown unwildy and became too long. So components were moved from it to seperate files. While making this first log I can already tell I want a better solution for writing it.<br></br> <br></br>
        The current login system at the time is planned to use cookies for storing the user login. So a cookie disclosure is added to site. Currently the close disclosure button doesnt work so it will be disabled for the build. The login forms seem quite daunting or the example code for it was overly complicated. Recardless it has to be designed. The current log in screen is quite ugly. I should find literature on color theory. <br></br> <br></br>
        13.3.2026</p>
          <p className='font-serif break-all text-center text-2xl m-10 text-indigo-400'></p>
          </div>
        </div>
        )

}
export default DevLog
