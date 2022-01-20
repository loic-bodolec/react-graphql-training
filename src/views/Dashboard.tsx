import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { useHistory } from 'react-router';
import Header from '../components/header/Header';
import SideBar from '../components/nav/SideBar';
import { Button } from 'react-bootstrap';

export const GET_PROFILE = gql`
  query getProfile {
    getProfile {
      id
      email
    }
  }
`;

function DashboardScreen(): JSX.Element {
  const [isActive, setIsActive] = useState(false);
  const showSidebar = () => setIsActive(!isActive);
  const { replace } = useHistory();
  const { data, /* loading,  */ error } = useQuery(GET_PROFILE);

  const onSignOut = () => {
    localStorage.removeItem('token');
    replace('/');
  };

  return (
    <>
      <Header showSidebar={showSidebar} />
      <SideBar isActive={isActive} showSidebar={showSidebar} />
      <div className="dashboard-container">
        <h1>Dashboard</h1>
        {error && <p>Error</p>}
        {data && (
          <div>
            <p>Hello {data.getProfile.email}</p>
            <Button size="sm" onClick={onSignOut}>
              Sign out
            </Button>
          </div>
        )}
      </div>
    </>
  );
}

export default DashboardScreen;
