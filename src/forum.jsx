import React, { useState,useEffect } from 'react';

const Forum = () => {
    const url = "https://portfolio-backend-tur1.onrender.com/api/chat"
  const [render,setRender]=useState(0);
  const [posts,setPosts]=useState([]);
  const [topics,setTopic]=useState([]);
  const [selectedTopic, setSelectedTopic]=useState('');
  async function getTopics(){
   const response = await fetch("https://portfolio-backend-tur1.onrender.com/api/forum/listTopics")
    const data = await response.json();
    console.log(data);
        return data;
      };
  
  useEffect(() => {
      const forumTimer = setInterval(() => {
        getTopics().then((d) => {
         
          setTopic(d);
        })
      }, 1000);
      return () => clearInterval(forumTimer);
    }, []);
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6 text-indigo-500">Forum</h1>
      <div className="bg-amber-600 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl border-b pb-2 mb-4">Discussion Topics</h2>
        {/* Forum content will go here */}
        <p>This is a place holder</p>
      </div>
      {render==0&&<div>
        <p>topics shown</p>
        <button onClick={()=>{setRender(1)}}>change to post list</button>
        <br></br>
        <p>{topics}</p>
{topics.map((topic, index) => (
    <button key={index} className="block w-full bg-indigo-200 hover:bg-indigo-300 text-left p-3 mb-2 rounded cursor-pointer" onClick={() => {
        setSelectedTopic(topic); 
        setRender(1); // Change to post list view when a topic is clicked (or handle based on specific UX)
    }}>
        {topic} {/* Displaying the topic title */}
    </button>
))}
        
      </div>}
      {render==1&&<div>
        <p>list of headers of posts</p>
         <button onClick={()=>{setRender(0)}}>return</button>
         <br></br>
          <button onClick={()=>{setRender(2)}}>open post</button>
      </div>}
      {render==2&&<div>
        <p>opended post</p>
         <button onClick={()=>{setRender(1)}}>change to post list</button>
         <br></br>
          <button onClick={()=>{setRender(0)}}>return to topics</button>
    </div>}
    </div>
  );
}

export default Forum;