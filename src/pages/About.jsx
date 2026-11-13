import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    fetch("https://portfolio-backend-tur1.onrender.com/").catch((err) =>
      console.error("Server ping error:", err)
    );
  }, []);

  return (
    <div>
      <h1 className='text-center text-5xl m-10 text-indigo-400'>About</h1>
      <p className='text-indigo-400 max-w-4xl mx-auto px-4 text-lg leading-relaxed text-left'>
        The site was made to showcase my skills and projects. 
      It is a simple site that is easy to navigate and understand. The purpose of the site is to showcase my skills and projects. The site has a
      functional forum and a chat that can be used. <br></br><br></br>
      It has a backend that is hosted on Render and a frontend that is hosted on GitHub Pages. The site is made using React and Tailwind CSS. 
      I increasingly utilize AI to improve the speed of development while reducing technical debt by reviewing all the code added. Feel free to checkout the devlog! </p>
    </div>
  );
};

export default About;
