import React from 'react';

const Forum = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6 text-indigo-500">Community Forum</h1>
      <div className="bg-amber-600 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl border-b pb-2 mb-4">Discussion Topics</h2>
        {/* Forum content will go here */}
        <p>This component is ready to host forum discussions.</p>
      </div>
    </div>
  );
}

export default Forum;