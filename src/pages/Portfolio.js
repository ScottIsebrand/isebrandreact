import { Link } from 'react-router-dom';
import Wizards from '../assets/basic-element-150png.png';
import Grant from '../assets/ulysses-s-grant-revealed-logo-blue-150-transp.png';

function Portfolio(params) {
  return (
    <div className="projects">
      <div className="page-title">
        <h1>Projects</h1>
      </div>
      <div className="projects-container">
        <div className="dueling-wizards">
          <h2>Dueling Wizards</h2>
        </div>
        <Link
          className="dueling-wizards-link"
          to="https://scottisebrand.github.io/dueling-wizards/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="wizards-image"
            src={Wizards}
            alt="Four elements symbols"
          />
        </Link>
        <p>
          <Link
            className="dueling-wizards-link"
            to="https://scottisebrand.github.io/dueling-wizards/"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            Dueling Wizards{' '}
          </Link>
          is a computer-game version of the hand game Rock, Paper, Scissors
          (also known as Rochambeau or as Stone, Paper, Scissors), but imagines
          the player and the computer opponent as wizards fighting a duel.
        </p>
        <p>
          The player chooses a Water, Fire, Earth, or Air spell to cast, and the
          computer's competing choice is determined randomly. Each round's
          winner is based on conditional logic that is shown on the game page as
          a damage table reminiscent of the kind used in traditional "pen and
          pencil" roleplaying games. (The computer opponent's name, Osmanwic,
          referenced in the game is an anagram of Mac Win OS.)
        </p>
        <hr></hr>
        <div className="grant-revealed">
          <h2>GrantRevealed.com</h2>
        </div>
        <Link
          className="grant-revealed-link"
          to="https://grantrevealed.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="grant-image" src={Grant} alt="Ulysses S. Grant" />
        </Link>
        <p>
          <Link
            className="grant-revealed-link"
            to="https://grantrevealed.com/"
            target="_blank"
            rel="noreferrer"
          >
            Ulysses S. Grant Revealed{' '}
          </Link>{' '}
          is a WordPress-based website and blog exploring the life and times of
          Ulysses S. Grant, the Commanding General of the U.S. Army during the
          American Civil War and later 18th President of the United States.
        </p>
      </div>
    </div>
  );
}

export default Portfolio;
