import { useHistory } from 'react-router';
import { Button } from 'react-bootstrap';
import Logo from '../assets/logo-jura.png';

function HomeScreen(): JSX.Element {
  const { push } = useHistory();

  return (
    <div className="home-container">
      <img className="logo-jura-home" src={Logo} alt="logo" />
      <h2 className="home-title">TICKETS MANAGER</h2>
      <p className="home-texte">Collaborez sur vos projets et gérez toutes vos tâches!</p>
      <div className="home-buttons">
        <Button
          className="home-button"
          onClick={() => {
            push('/signin');
          }}
        >
          Connexion
        </Button>
        <Button
          className="home-button"
          onClick={() => {
            push('/signup');
          }}
        >
          Inscription
        </Button>
      </div>
    </div>
  );
}

export default HomeScreen;
