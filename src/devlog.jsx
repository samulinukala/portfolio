
function DevLog()
{
    return(
      <div >
       <h1 className='text-center text-5xl m-10 text-indigo-400' >Devlog</h1>
        <div className="bg-fuchsia-900">
          <h2 className="text-teal-400"> AI and Ui</h2>
          <p className="text-indigo-400">I have tried using a ai model for coding. I tried multiple different models. 
            As with all of this site I needed it to be free. So I have started using Gemma4 and it is making 
            website coding much more fun. I feel I lack a bit of working knowledge of webdevelopment and it does patch
            my expertice scrarily well. It is quite manual still as I have to have to guide the model quite tightly.
            most problems came from the model having too short of a response. I made a config file that made it have
            unlimited response length. That made it quite useful. <br></br> <br></br> On the ui front I have been working
            on improving the chat and gallery with ai it took few days. Quite fast. I am worried about technical debt
            that might accumulate but using a local model does ease my nerves a bit. I do love local models at least.
            <br></br><br></br> The next hurdle will continue work on the jwt token reading and usage for forum. 
            That will make the ui more responsive as it will show if the user is logged in. The forum page has a 
            placeholder currently. I might look back at the replyke components but it might be more trouble than
            it is worth trying to modify it to fit my purpose. The register page could use a verification for the password
            when making an account and both could use regex verification I guess that will be on the backburner for now.
            <br></br><br></br><p className="text-white"> 6.7.2026</p><br></br>
          </p>

        </div>
        <div className="bg-emerald-900">
           <h2 className='text-teal-400'>Nominal progress report</h2>
           <p className='text-indigo-400'> The account creation works now and shows the username in chat. 
          So for the first time the site is doing something useful with the frontend, backend and database all communicating. 
          A mile stone in a long and rocky road. The next part will focus on improving the frontend. 
          Currently the frontend is not giving any feedback on any actions those make the experience quite bare.
          </p>
           <br></br>
            <p className="text-white">9.6.2026</p>
           <br></br>
          
        </div>
        <div className="bg-amber-900">
          <h2 className="text-teal-400">A momentous event has transpired</h2>
            <p className="text-indigo-400"> The chat works now. WOOOOOO! The sites backend is on a site named render which has a completely free tier
        which I am a sucker for. 
        The chat section can now read the chat and send messages. 
        Major progress. Alltough it does just show it as JSON 
        which is rather ugly and the message can't be sent with 
        enter and login functionality from the backend is not implemented. 
        Damn you selfcritisism I am doing internet magic leave me be. 
        The next part will be making the chat presentable and make the login work. 
        I wonder how many vulnerabilities the chat leaves for the server. 
        I really ought to sanitize the inputs. Altough form over function is quite a popular sentiment.
         </p><br></br><p className="text-white">17.4.2026</p><br></br>
        </div>
      
        <div className="bg-blue-900">
          <h2 className='text-teal-400'>Backend progress</h2>
          <p className="text-indigo-400"> The progress to make http routes has been chaotic 
            coming from the fact that it's my first time doing it. 
            I had functions that were able to verify password against the database. 
            At first I added http routes for login. 
            The main problem became my inexperience with JavaScript. 
            There was a missing parenthesis on the backend that caused the route not to work. 
            I am rather spoiled when comes to my syntax highlighting. 
            Having coded C# where the compiler immidietly yells at you 
            for missing anything is quite a change. I feel that missing that instant feedback 
            forces me to develop new solutions. Currently my goto solution is to fail at debugging 
            for several days and then feed the function to Gemini to find the syntax error.
            <br></br> <br></br>
             I had minor issues with async functions from not dealing with them before. 
             I finished the login functionality and it even returns a signed JWT token. 
             Currently I have no use for it as I have not implemented forum system yet or any 
             logged in functionality. I also finished a chat functionality for the backend that 
             allows user to send simple messages. Currently it is untested as it is stuck on the api.
             <br></br><br></br> Next part of development process will focus on the frontend and
              connecting frontend to the backend. The chat functionality seems like a good target. 
              I need to find a way to host the backend but currently I have no idea on how to do it. 
              I assume after figuring out how to connect the halves I will work on the chat room feature.
               Express sessions seemed quite promising avenue to study.<br></br><br></br> </p> <p className="text-white">17.4.2026 </p><br>
               </br>
        </div>
      
        <div className="bg-cyan-900">
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
