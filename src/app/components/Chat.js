import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import React from 'react';
import styled from 'styled-components';

function Chat() {

  return (
    <ChatContainer>
      <Header>
        <HeaderLeft>
          <h4>
            <strong>#Room-name</strong>
            <StarBorderOutlinedIcon />
          </h4>
        </HeaderLeft>
        <HeaderRight>
          <p>
            <InfoOutlinedIcon /> Details
          </p>
        </HeaderRight>
      </Header>
      <ChatMessages>{/* Chat messages go here */}</ChatMessages>
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

const ChatInput = styled.div``;
