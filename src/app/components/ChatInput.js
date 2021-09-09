import React, {useRef} from 'react';
import firebase from 'firebase';
import styled from 'styled-components';
import {Button} from '@material-ui/core';
import { db } from '../firebase';

function ChatInput({channelName, channelId}) {
  const inputRef = useRef(null);

  const sendMessage = (e) => {
    e.preventDefault();  // prevents refresh

    if (!channelId) return false;

    db.collection('rooms').doc(channelId).collection('messages').add({
      message: inputRef.current.value,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    inputRef.current.value = '';
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          type="text"
          placeholder={`Message #${channelName}`}
          ref={inputRef}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;

  form {
    position: relative;
    display: flex;
    justify-content: center;

    > input {
      position: fixed;
      bottom: 30px;
      width: 60%;
      border: 1px solid gray;
      border-radius: 3px;
      padding: 20px;
      outline: none;
    }

    > button {
      display: none;
    }
  }
`;
