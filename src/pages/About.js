import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="about">
      <div className="page-title">
        <h1>About</h1>
      </div>
      <div className="about-container">
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
          front-end team.
        </p>
        <p>
          Before my transition to tech, I worked as a marketer first in
          educational publishing and then for a special events venue and
          production company, later serving as that company's Chief Operating
          Officer.
        </p>
        <p>
          I oversaw the production of the company's website--plotting its page
          structure, writing all of its copy, and working with the developers
          from start to finish. In the process, I learned the WordPress skills
          to maintain and update the website going forward.
        </p>
        <p>
          As COO, I coordinated the three-person management team, working to
          drive the team towards consensus and communicating closely on a daily
          basis with ownership in writing and verbally, consistently
          demonstrating strong adherence to confidentiality. I also oversaw IT,
          HR, government relations, and insurance matters, and wrote and
          maintained the company's Standard Operating Procedures.
        </p>
        <hr></hr>
        <div className="hobbies">
          <h2>Hobbies and Interests</h2>
        </div>
        <p>
          Besides software development, I am also interested in history, early
          and classical music, British history and politics, and art and
          architecture. I strongly considered a career as a historian, and
          earned a master's degree from Yale University towards that end. My
          studies focused heavily on ecclesiastical history, including sacred
          art and architecture.
        </p>
        <p>
          In college, I interned at the House of Commons of the United Kingdom
          as a Research Assistant for the Labour Party Spokesman on Trade and
          Industry and subsequently as an assistant to the Bishop of London's
          Chaplain to the Homeless (Church of England). I have been to the U.K.
          several times since then and always enjoy spending time with my
          friends there. I am a member of the{' '}
          <Link
            className="text-link-regular"
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
          website at GrantRevealed.com, about Ulysses S. Grant, Civil War
          general and 18th President of the United States. I am a member of the{' '}
          <Link
            className="text-link-regular"
            to="https://grantstomb.org/"
            target="_blank"
            rel="noreferrer"
          >
            Grant Monument Association
          </Link>{' '}
          and a supporter of the{' '}
          <Link
            className="text-link-regular"
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
          podcasts, I am probably either with my partner and eating out with
          friends, watching sci-fi, fantasy, or British shows or movies, or
          perusing Instagram accounts featuring landscape, wildlife, or
          architecture photography.{' '}
        </p>
        <hr></hr>
        <div className="on-this-day">
          <h2 className="on-this-day-subheadline">On This Day (#OTD)</h2>
          <p>
            Head to my <Link to="/onthisday">On This Day page</Link> to discover
            some of the significant events that occurred on this day in history.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
