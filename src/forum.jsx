import React, { useState, useEffect } from 'react';

const Forum = () => {
  // Removed unused const url
  const [topics, setTopics] = useState([]);
  const [posts, setPosts] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState('');
  const [renderView, setRenderView] = useState(0); // Use more descriptive state name

  // Fetch topics when the component mounts
  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await fetch("https://portfolio-backend-tur1.onrender.com/api/forum/listTopics");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setTopics(data);
      } catch (error) {
        console.error("Failed to fetch topics:", error);
        setTopics([]); // Clear topics on failure
      }
    };

    fetchTopics();
    // Removed interval fetching for better reliability, fetch only once on mount
  }, []);

  const handleTopicSelect = (topicName) => {
    setSelectedTopic(topicName);
    // Change view to the post list/detail view when a topic is selected
    setRenderView(1);
  };

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6 text-indigo-500">Forum</h1>
      <div className="bg-amber-600 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl border-b pb-2 mb-4">Discussion Topics</h2>
        {/* Forum content will go here */}
        <p>This is a place holder</p>
      </div>

      {renderView === 0 && ( // Displaying topic list view
        <div>
          <h3 className="text-xl mt-4 mb-2">Available Topics</h3>
          {topics.length > 0 ? (
            topics.map((topic, index) => (
              // Assuming 'topic' is the displayable name/string based on original code usage
              <button
                key={index}
                className="block w-full bg-indigo-200 hover:bg-indigo-300 text-left p-3 mb-2 rounded cursor-pointer"
                onClick={() => handleTopicSelect(topic)} // Use handler function
              >
        {topic} {/* Displaying the topic title */}
    </button>
            ))
          ) : (
            <p>No topics found.</p>
          )}
        </div>
      )}

      {renderView === 1 && ( // Post list view for a selected topic
        <div>
          <h3 className="text-xl mb-4">Posts in: {selectedTopic || "Select a topic"}</h3>
           <button onClick={() => setRenderView(0)} className="mb-4 bg-gray-200 p-2 rounded">← Back to Topics</button>
         <p>list of headers of posts (Displaying content related to '{selectedTopic}')</p>
          {/* In a real app, you would fetch posts here based on selectedTopic */}
    </div>
      )}

      {renderView === 2 && ( // Opened post view
        <div>
          <h3 className="text-xl mb-4">Opened Post Details</h3>
           <button onClick={() => setRenderView(1)} className="mb-4 bg-gray-200 p-2 rounded">← Back to Posts List</button>
           <button onClick={() => setRenderView(0)} className="mb-2 bg-gray-200 p-2 rounded">← Return to Topics</button>
        </div>
    
        )}
  </div>
  )
}
export default Forum;