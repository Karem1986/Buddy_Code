import React from "react";

export default function Testimonials(props) {
  return (
    <div className="testimonials">
      <img src={props.imageUrl} alt="code-mate developers" width="400px" heigth="450px" />
      <h3>{props.name}</h3>
      <p> {props.description}</p>
      <h4>{props.testimonial}</h4>
    </div>
  );
}
