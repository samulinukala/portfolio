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
      <p className='text-indigo-400 max-w-4xl mx-auto px-4 text-lg leading-relaxed text-center'>
        Hello. I am learning webdevelopment and I have started to make this website to improve my skills. it will slowly improve over time. It uses React framework for the components. It uses Vite for building the site. I also draw so I added an gallery as chalenge. The chat currently works but takes a while to start. Time will tell how it will pan out.I am hoping to make it a sort of showcase for my stuff and what I have done. Time will tell how it will pan out.
      </p>
    </div>
  );
};

export default About;
  