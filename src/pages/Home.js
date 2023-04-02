import Scott from '../assets/scott-isebrand-sq-500.jpg';
import CV from '../assets/curriculum-vitae-icon-by-freepik.png';
import resume from '../documents/Scott-Isebrand-Software-Engineer.pdf';

function Home() {
  return (
    <div className="home">
      <h1 className="home-headline">Scott Isebrand</h1>
      <img className="home-profile-image" src={Scott} alt="" />
      <h2 className="home-subheadline">Software Developer</h2>
      <h3 className="home-subheadline">
        HTML5, CSS, JavaScript, React, MongoDB, Express, and Node.js
      </h3>
      {/* <a href="https://www.flaticon.com/free-icons/curriculum" title="curriculum icons">Curriculum icons created by Freepik - Flaticon</a> */}
      <a
        href={resume}
        target="_blank"
        rel="noreferrer"
        title="Click to view resume in a new tab"
      >
        <img className="cv-icon" src={CV} alt="" />
      </a>
    </div>
  );
}

export default Home;
