import React from 'react';
import ProjectCard from './projectCard';

const ProjectList = () => {
  // State to hold projects data (can be populated later)
  

  return (
    <div className="project-list-container max-w-full  mx-auto p-6 text-slate-100">
      <h1 className="text-4xl font-bold text-center my-8 text-indigo-400">Project List</h1>

      {/* Projects header */}
      <div className="projects-header  flex justify-between bg-slate-800 p-4 rounded-lg font-semibold text-indigo-300 mb-4 border border-slate-700">
     
      <ProjectCard className="w-max" shortDescription="A clock app to improve upon other clock apps." header="Frontend" title="Better-Clock" description="The site was made for the purpose 
      of improving on the many clock sites on the web. Many clock sites have customisation options and yet lack common features like 
      a timer or a calendar. I decided to add functionality to the site that I most comnonly needed. Another goal was to expand my knowledge of AI coding
      the site is nearly fully coded using AI. The purpose behind that was to test the abilities of AI and make the purpose of a human coder more of 
      an architect of the app." imageUrl="https://lh3.googleusercontent.com/d/1P1TcNUMeVzacl25J7g937uiAtgGsBNR6"  link="https://samulinukala.github.io/better-clock/" />
      <ProjectCard className="w-max" header="Fullstack" title="This portfolio" imageUrl="https://lh3.googleusercontent.com/d/1lNlDl1K795PEpS6EHm9Pmbv_1xfByadu"shortDescription="My site to work as platform to improve my skills and show my progress." 
      description="The site was made to showcase my skills and projects. 
      It is a simple site that is easy to navigate and understand. The purpose of the site is to showcase my skills and projects. The site has a functional forum and a chat that can be used.
      It has a backend that is hosted on Render and a frontend that is hosted on GitHub Pages. The site is made using React and Tailwind CSS. 
      I increasingly utilize AI to improve the speed of development while reducing technical debt by reviewing all the code added." 
      link="https://samulinukala.github.io/portfolio/Devlog" />
      </div>

    
      
    </div>
  );
};

export default ProjectList;