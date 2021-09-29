import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Spinner from 'react-spinkit';
import './App.css';
import styled from 'styled-components';
import Chat from './components/Chat';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from './firebase';
import Login from './components/Login';

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <img
            src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
            alt=""
          />
          <LoadingSpinner name="ball-spin-fade-loader" fadeIn="none" />
        </AppLoadingContents>
      </AppLoading>
    );
  }

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Switch>
                <Route path="/" exact>
                  <Chat />
                </Route>
              </Switch>
            </AppBody>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

const AppLoading = styled.div`
  display: grid;
  height: 100vh;
  width: 100%;
  place-items: center;
`;

const AppLoadingContents = styled.div`
  display: flex;
  text-align: center;
  padding-bottom: 100px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }
`;

const LoadingSpinner = styled(Spinner)`
  color: var(--brand-color);
`;
