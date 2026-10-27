import React from 'react';


const ProjectList = () => {
  // State to hold projects data (can be populated later)
  

  return (
    <div className="project-list-container max-w-4xl mx-auto p-6 text-slate-100">
      <h1 className="text-4xl font-bold text-center my-8 text-indigo-400">Project List</h1>

      {/* Projects header */}
      <div className="projects-header flex justify-between bg-slate-800 p-4 rounded-lg font-semibold text-indigo-300 mb-4 border border-slate-700">
      <a href="https://samulinukala.github.io/better-clock/" className="text-indigo-300 hover:text-indigo-400">Better Clock</a>
      </div>

    
      
    </div>
  );
};

export default ProjectList;