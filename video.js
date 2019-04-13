import React from "react";
const Video = (props) => {
  return (
    <div className="vd">

      <iframe width="300" height="172" 
      src={props.element.url}
       frameborder="0" allow="accelerometer; autoplay; 
       encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
      
      <h4>{props.element.title}</h4>
      <p> {props.element.description}</p>
    </div>
  );
};
export default  Video
