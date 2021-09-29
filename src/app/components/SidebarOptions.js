import React from 'react';
import {useCollection} from 'react-firebase-hooks/firestore';
import styled from 'styled-components';
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
import Spinner from 'react-spinkit';
import SidebarOption from './SidebarOption';
import {db} from '../firebase';

function SidebarOptions() {
  const [channels, loading, error] = useCollection(db.collection('rooms'));

  if (!error && loading) {
    return (
      <SidebarOptionsLoading>
        <SidebarOptionsLoadingContents>
          <img
            src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
            alt=""
          />
          <LoadingSpinner name="line-scale-pulse-out" fadeIn="none" />
        </SidebarOptionsLoadingContents>
      </SidebarOptionsLoading>
    );
  }

  return (
    <SidebarOptionsContainer>
      <SidebarOption Icon={InsertCommentIcon} title="Threads" />
      <SidebarOption Icon={InboxIcon} title="Mentions & Reactions" />
      <SidebarOption Icon={DraftsIcon} title="Saved Items" />
      <SidebarOption Icon={BookmarkBorderIcon} title="Channel Browser" />
      <SidebarOption Icon={PeopleAltIcon} title="People & User Groups" />
      <SidebarOption Icon={AppsIcon} title="Apps" />
      <SidebarOption Icon={FileCopyIcon} title="File Browser" />
      <SidebarOption Icon={ExpandLessIcon} title="Show Less" />

      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title="Channels" />

      <hr />

      <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel" />

      {channels?.docs.map((doc) => (
        <SidebarOption key={doc.id} title={doc.data().name} id={doc.id} />
      ))}
    </SidebarOptionsContainer>
  );
}

export default SidebarOptions;

const SidebarOptionsContainer = styled.div`
  overflow-y: scroll;
`;

const SidebarOptionsLoading = styled.div`
display: grid;
height: 100vh;
width: 100%;
place-items: center;
background-color: white
`;

const SidebarOptionsLoadingContents = styled.div`
display: flex;
text-align: center;
padding-bottom: 100px;
flex-direction: column;
justify-content: center;
align-items: center;

>img {
  height: 100px;
  padding: 20px;
  margin-bottom: 40px;
}
`;

const LoadingSpinner = styled(Spinner)``;
