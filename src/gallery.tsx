function RandomImage(props: num)
{
  const style={marginTop: "0.2%",marginLeft:"0.9%"}
  if(props.num??0)
  { 
  
  return <img title='testImage' style={style} src={`https://picsum.photos/200/200?random${props.num}`}></img>
  }
  else
  {
    return <img title='testImage' src={"https://picsum.photos/200/200"}></img>
  }
  
}
type url={ url:string}
function SpecificImage(props :url)
{
  const style={marginTop: "0.2%",marginLeft:"0.9%", width:"300px", height:"378px"}
  
   return <img title='testImage' style={style} src={props.url}></img>
}

