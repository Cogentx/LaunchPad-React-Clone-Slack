import React from 'react';
import styled from 'styled-components';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOptions from './SidebarOptions';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from '../firebase';

function Sidebar() {

  const [user] = useAuthState(auth);

  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Cogentx</h2>
          <h3>
            <FiberManualRecordIcon />
            {user?.displayName}
          </h3>
        </SidebarInfo>
        <CreateIcon></CreateIcon>
      </SidebarHeader>
      <SidebarOptions/>
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
  font-size: 1rem;
  background-color: var(--brand-color);
  color: white;
  flex: 0.3;
  border-top: 1px solid var(----brand-color-accent);
  max-width: 260px;
  margin-top: 60px;

  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid var(--slack-color-accent);
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid var(----brand-color-accent);
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: var(--brand-color-accent);
    font-size: 1.1em;
    background-color: white;
    border-radius: 50%;
  }
`;

const SidebarInfo = styled.div`
  flex: 1;

  > h2 {
    font-size: 1em;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3 {
    display: flex;
    font-size: 0.8em;
    font-weight: 400;
    align-items: center;

    > .MuiSvgIcon-root {
      font-size: 0.8em;
      margin-top: 1px;
      margin-right: 2px;
      color: green;
    }
  }
`;
