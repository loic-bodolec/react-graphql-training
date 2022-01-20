import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const SIGNUP = gql`
  mutation signup($email: String!, $password: String!) {
    signup(email: $email, password: $password) {
      id
      email
    }
  }
`;

function SignupScreen(): JSX.Element {
  const { replace } = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [doSignUp, { loading, error }] = useMutation(SIGNUP);

  const onSubmit = async () => {
    await doSignUp({
      variables: {
        email: email,
        password: password
      }
    });
    // success
    replace('/');
  };

  return (
    <div className="signup-container">
      <h1>Inscription</h1>
      <Form>
        <Form.Group className="mb-3" controlId="Form.ControlInput1-signup">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Form.ControlInput2-signup">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="name@example.com" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
      </Form>
      <Button className="signup-button" onClick={onSubmit} disabled={loading === true}>
        S'inscrire
      </Button>
      {error && <p>Error</p>}
      <Link className="signup-link" to="/signin">
        Déjà un compte?
      </Link>
    </div>
  );
}

export default SignupScreen;
