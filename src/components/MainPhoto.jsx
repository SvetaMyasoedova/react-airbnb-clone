import React from "react";


function MainPhoto() {
  return (
    <section className="main-photo">
      <img src='../images/photo-grid.png' className = 'main-photo--photo'/>
      <h1 className = 'main-photo--header'>Online Experiences</h1>
      <p className = 'main-photo--text'>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}

export default MainPhoto;
