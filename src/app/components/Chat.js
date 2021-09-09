import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import React from 'react';
import styled from 'styled-components';
import {useCollection, useDocument} from 'react-firebase-hooks/firestore';
import { useSelector } from 'react-redux';
import ChatInput from './ChatInput';
import {db} from '../firebase';
import {selectRoomId} from '../features/appSlice';

function Chat() {
  const roomId = useSelector(selectRoomId);
  const [roomDetails] = useDocument(
    roomId && db.collection('rooms').doc(roomId)
  );

  const [roomMessages] = useCollection(
    roomId &&
    db
      .collection('rooms')
      .doc(roomId)
      .collection('messages')
      .orderBy('timestamp', 'asc')
  );

  // console.log('rD', roomDetails?.data().name);
  // console.log('rM', roomMessages);

  return (
    <ChatContainer>
      <Header>
        <HeaderLeft>
          <h4>
            <strong>#{roomDetails?.data().name}</strong>
            <StarBorderOutlinedIcon />
          </h4>
        </HeaderLeft>
        <HeaderRight>
          <p>
            <InfoOutlinedIcon /> Details
          </p>
        </HeaderRight>
      </Header>
      <ChatMessages>
        {roomMessages?.docs.map((doc, index) => {
          const {message, timestamp, user, userImage} = doc.data();
          console.log(message, timestamp, user, userImage);
          

          return (
            <div key={index}>
              <h3>Message Component goes here!</h3>
            </div>
          )
        })}
      </ChatMessages>
      <ChatInput channelId={roomId} channelName="ROOM"/>
    </ChatContainer>
  );
}

export default Chat;

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
  padding: 10px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  > h4 {
    display: flex;
    text-transform: lowercase;

    > .MuiSvgIcon-root {
      margin-left: 20px;
      font-size: 18px;
    }
  }
`;
const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;

    > .MuiSvgIcon-root {
      margin-right: 5px !important;
      font-size: 16px;
    }
  }
`;

const ChatMessages = styled.div``;

