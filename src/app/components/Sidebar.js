import React from 'react';
import {useCollection} from 'react-firebase-hooks/firestore';
import styled from 'styled-components';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarOption from './SidebarOption';
import {db} from '../firebase';

function Sidebar() {
  const [channels, loading, error] = useCollection(db.collection('rooms'));



  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>SlangChat</h2>
          <h3>
            <FiberManualRecordIcon />
            Ted Cogent
          </h3>
        </SidebarInfo>
        <CreateIcon></CreateIcon>
      </SidebarHeader>
      <SidebarOption Icon={InsertCommentIcon} title="Threads"/>
      <SidebarOption Icon={InboxIcon} title="Mentions & Reactions"/>
      <SidebarOption Icon={DraftsIcon} title="Saved Items"/>
      <SidebarOption Icon={BookmarkBorderIcon} title="Channel Browser"/>
      <SidebarOption Icon={PeopleAltIcon} title="People & User Groups"/>
      <SidebarOption Icon={AppsIcon} title="Apps"/>
      <SidebarOption Icon={FileCopyIcon} title="File Browser"/>
      <SidebarOption title="Cogentx Browser"/>
      <SidebarOption Icon={ExpandLessIcon} title="Show Less"/>

      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title="Channels"/>

      <hr />

      <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel"/>

      {channels?.docs.map((doc) => 
        <SidebarOption key={doc.id} addChannelOption 
          title={doc.data().name}
          id={doc.id}/>
      )}
    
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
    border: 1px solid var( --slack-color-accent);
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
