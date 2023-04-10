import { Link } from 'react-router-dom';
import Greenwich from '../assets/sji-greenwich-260.jpg';
import Reapers from '../assets/reapers-by-george-stubbs-260.jpg';

function About() {
  return (
    <div className="main-content about">
      <h1 className="main-title">About</h1>
      <div className="about-container">
        <h2>Bio</h2>
        <div className="about-image-container">
          <img
            className="greenwich-image"
            src={Greenwich}
            alt="Greenwich London"
          />
          <p className="about-image-caption">In Greenwich, London, UK</p>
        </div>
        <p>
          My Name is Scott Isebrand. I am currently completing a rigorous,
          immersive Software Engineering boot camp at Per Scholas in New York
          City to become a full-stack engineer, acquiring skills in HTML5, CSS,
          JavaScript, Git, and the MERN stack of MongoDB, Express, React,
          Node.js.
        </p>
        <p>
          I am looking for opportunities to bring my developer skills and
          previous work experience together to be a productive part of a
          software development team.
        </p>
        <p>
          Before my transition to tech, I worked as a marketer--first in
          educational publishing and then for a special events venue and
          production company, later serving as that company's Chief Operating
          Officer.
        </p>
        <p>
          I oversaw the production of the company's website--plotting its page
          structure, writing all of its copy, and working with the developers
          from start to finish. In the process, I learned the WordPress skills
          needed to maintain and update the website going forward.
        </p>
        <p>
          As COO, I coordinated the three-person management team, working to
          drive the team towards consensus and communicating closely on a daily
          basis with ownership, consistently demonstrating strong adherence to
          confidentiality. I oversaw IT, HR, government and community relations,
          budgeting, P&L reporting, and insurance matters, and wrote and
          maintained the company's Standard Operating Procedures.
        </p>
      </div>

      <div className="about-container">
        <h2>Interests</h2>
        <div className="about-image-container">
          <img
            className="reapers-stubbs-image"
            src={Reapers}
            alt="Reapers painting by George Stubbs, 1795"
          />
          <p className="about-image-caption">
            <i>Reapers</i> by George Stubbs, 1795, Yale Center for British Art
          </p>
        </div>
        <p>
          Besides software development, I am also interested in history, early
          and classical music, British history and politics, and art and
          architecture. I considered a career as a historian, and earned a
          master's degree from Yale University towards that end.
        </p>
        <p>
          I interned at the House of Commons of the United Kingdom as a Research
          Assistant for the Labour Party Spokesman on Trade and Industry and
          subsequently as an assistant to the Bishop of London's Chaplain to the
          Homeless (Church of England). I have been to the U.K. several times
          since then and always enjoy spending time with my friends there. I am
          a member of the{' '}
          <Link
            className="text-link-regular"
            title="Click to open Saint George's Society homepage in a new tab"
            to="https://www.stgeorgessociety.org/"
            target="_blank"
            rel="noreferrer"
          >
            St. George's Society of New York City
          </Link>
          , one of the city's oldest registered charities (est. 1770), and the
          New York branch of the
          <Link
            className="text-link-regular"
            title="Click to open English-Speaking Union homepage in a new tab"
            to="https://www.esuus.org/newyork/"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            English-Speaking Union
          </Link>
          .
        </p>
        <p>
          I am also interested in the American Civil War. I recently launched a
          website at{' '}
          <Link
            className="text-link-regular"
            title="Click to open Ulysses S. Grant Revealed in a new tab"
            to="https://grantrevealed.com/"
            target="_blank"
            rel="noreferrer"
          >
            GrantRevealed.com
          </Link>
          , about Ulysses S. Grant, Civil War general and 18th President of the
          United States. I am a member of the{' '}
          <Link
            className="text-link-regular"
            title="Click to open Grant Monument Association homepage in a new tab"
            to="https://grantstomb.org/"
            target="_blank"
            rel="noreferrer"
          >
            Grant Monument Association
          </Link>{' '}
          and a supporter of the{' '}
          <Link
            className="text-link-regular"
            title="Click to open Grant Cottage homepage in a new tab"
            to="https://www.grantcottage.org/"
            target="_blank"
            rel="noreferrer"
          >
            Ulysses S. Grant Cottage National Historic Landmark
          </Link>
          .
        </p>
        <p>
          In my free time if I'm not listening to history or BBC Radio 4
          podcasts, I am probably with my partner and either eating out with
          friends or watching sci-fi, fantasy, or British shows or movies, or I
          am perusing Instagram accounts featuring landscape, wildlife, or
          architecture photography.{' '}
        </p>
        <hr></hr>
        <div className="on-this-day">
          <h2 className="on-this-day-subheadline">On This Day (#OTD)</h2>
          <p>
            Head to my{' '}
            <Link title="Click go to the On This Day page" to="/onthisday">
              On This Day page
            </Link>{' '}
            to discover some of the significant events that occurred on this day
            in history.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
