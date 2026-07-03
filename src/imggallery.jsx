import { useState,useRef } from 'react'
import {useEffect} from 'react';

// Utility function to fetch data
  async function getDataE()
{
  const url = 'https://gist.githubusercontent.com/hamaoc/63934160a3979df93e1476bc81128fce/raw/caa0992f1da9fd0b9c4297ff656564ed9b85e6c5/artDb.json';

  const response= await fetch(url);
  const data=await response.json();
  return data;  
}


function Gallery()
{
  return(<div className='bg-gray-900 min-h-screen p-8'> {/* Added background and padding for better overall feel */}
 <h1 className='text-center text-5xl m-4 mb-10 text-indigo-400' >Gallery</h1>
    
    <DriveImageRenderList />
</div>)
}

function DriveImage(props)
{
  const shitUrl=props.url;
  
  const cleanerUrl=shitUrl.slice(32,65);
  
   return (
     // Replaced the simple div with a card structure for better appeal
     <div className='bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-indigo-500/50 transition duration-300 flex flex-col'> 
        {/* Changed object-cover to object-contain to show the entire image */}
        <div className='w-full aspect-square bg-[#7a7a74] rounded-lg overflow-hidden mb-2'>
            <img title={props.title} className='h-full w-full object-contain' src={`https://lh3.googleusercontent.com/u/0/d/${cleanerUrl}`}></img>
        </div>
        {props.title&& <p className='text-indigo-200 text-xl mt-1 text-left'>{props.title}</p>} 
     </div>
)
}
function DriveImageRenderList()
{
  
  const [images,setImages]=useState([])
      useEffect(()=>{
       getDataE().then((result)=>{
    setImages( result.imageData);
      });
        
      },
      []);

     return (
       // Adjusted grid structure for better spacing and card grouping
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'> 
        { images.map((work)=>(
          <DriveImage key={work.title} title={work.title} url={work.url}/>
        ))
      }
  </div>
  );
}

export default Gallery
