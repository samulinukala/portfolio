import { useState,useRef } from 'react'
import {useEffect} from 'react';

  async function getDataE()
{
  const url = 'https://gist.githubusercontent.com/hamaoc/63934160a3979df93e1476bc81128fce/raw/caa0992f1da9fd0b9c4297ff656564ed9b85e6c5/artDb.json';

const response= await fetch(url);

const data=await response.json();



return data;  
  
}



function Gallery()
{
  return(
<div>
 <h1 className='text-center text-5xl m-10 text-indigo-400' >Gallery</h1>
    
   
    <DriveImageRenderList />
</div>)
}
function DriveImage(props)
{
 
  const PicStyle={width:"300px", height:"378px"}
  const shitUrl=props.url;
  
  const cleanerUrl=shitUrl.slice(32,65);
  
   return (
     <div className='' >
     <img title={props.title} className='h-64 w-52 flex-initial rounded-4xl' src={`https://lh3.googleusercontent.com/u/0/d/${cleanerUrl}`}></img>
     {props.title&& <p className='text-indigo-300 text-2xl text-left  m-1'>{props.title} </p>}
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
      
       <div className='grid grid-cols-3'>
        { images.map
        ((work)=>
         (
          <DriveImage title={work.title} url={work.url}/>
         )
        )
        }
        
  </div>
 
  );
}
export default Gallery
