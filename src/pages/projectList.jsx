import React from 'react';

const ProjectList = () => {
  // State to hold projects data (can be populated later)
  const [projects, _setProjects] = React.useState([]);

  return (
    <div className="project-list-container max-w-4xl mx-auto p-6 text-slate-100">
      <h1 className="text-4xl font-bold text-center my-8 text-indigo-400">Project List</h1>

      {/* Projects header */}
      <div className="projects-header flex justify-between bg-slate-800 p-4 rounded-lg font-semibold text-indigo-300 mb-4 border border-slate-700">
        <span>Name</span>
        <span>Status</span>
        <span>Actions</span>
      </div>

      {projects.length === 0 ? (
        <div className="text-center text-slate-400 py-8 bg-slate-800/40 rounded-lg border border-dashed border-slate-700">
          No projects available yet.
        </div>
      ) : (
        <div className="space-y-2">
          {projects.map((project, idx) => (
            <div
              key={project.id || idx}
              className="flex justify-between items-center bg-slate-800/60 p-4 rounded-lg border border-slate-700"
            >
              <span>{project.name}</span>
              <span>{project.status}</span>
              <span>{project.actions}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectList;