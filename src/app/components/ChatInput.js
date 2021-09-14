import React, {useState, useEffect, useRef} from 'react';
import firebase from 'firebase';
import styled from 'styled-components';
import {Button} from '@material-ui/core';
import {useAuthState} from 'react-firebase-hooks/auth';
import {db, auth} from '../firebase';

function ChatInput({chatRef, channelName, channelId}) {
  const inputRef = useRef(null);
  const [input, setInput] = useState('');
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (inputRef) {
      inputRef.current.focus();
      }
  }, []);

  const sendMessage = (e) => {
    e.preventDefault(); // prevents refresh

    if (!channelId) return false;

    db.collection('rooms').doc(channelId).collection('messages').add({
      // message: inputRef.current.value,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user.displayName,
      userImage: user.photoURL,
    });

    chatRef?.current?.scrollIntoView({
      behavior: 'smooth'
    });

    // inputRef.current.value = '';
    setInput('');
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          type="text"
          placeholder={`Message #${channelName}`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
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
