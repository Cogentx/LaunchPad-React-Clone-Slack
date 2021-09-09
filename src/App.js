import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import styled from 'styled-components';
import Chat from './app/components/Chat';
import Header from './app/components/Header';
import Sidebar from './app/components/Sidebar';

function App() {
  return (
    <div className="app">
      <Router>
        <>
          <Header />
          <AppBody>
            <Sidebar/>
            <Switch>
              <Route path="/" exact>
                <Chat/>
              </Route>
            </Switch>
          </AppBody>
        </>
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
display: flex;
height: 100vh;
`;