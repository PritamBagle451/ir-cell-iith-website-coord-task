import { useEffect, useState } from "react";

const images=[
    "b1.jpeg","b2.jpeg","b3.jpg","b4.jpg","b5.jpeg","b6.jpg","b7.jpg","b8.jpeg","b9.jpeg","b10.jpg","b11.jpg","b12.jpg",
    "b13.jpg","b14.jpg"
];
export default function Calculations(){
const [currentImage,setCurrentImage]=useState(0);
const [playVideo,setPlayVideo]=useState(false);
useEffect(()=>{
const interval=setInterval(()=>{
setCurrentImage((prev)=>
(prev+1)%images.length
);
},3500);
return ()=>clearInterval(interval);
},[]);
useEffect(()=>{
const handlePlay=()=>{
setPlayVideo(true);
};
window.addEventListener("playVideo",handlePlay);
return ()=>window.removeEventListener(
"playVideo",
handlePlay
);

},[]);

return(

<div className="image-slider">

{

playVideo ?

<iframe
className="video-frame"
width="650"
height="420"
src="https://www.youtube.com/embed/HuVWObq1WK8?autoplay=1"title="Campus Video"
frameBorder="0"
allow="autoplay"
allowFullScreen
></iframe>

:

<img
src={`/${images[currentImage]}`}
className="slider-image"
/>

}


</div>

);

}