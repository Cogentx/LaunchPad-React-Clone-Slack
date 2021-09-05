import styled from 'styled-components';
import {db} from '../firebase';

function SidebarOption({Icon, title, addChannelOption}) {

  const addChannel = async () => {
    // TODO: upgrade from built-in DOM 'prompt' function
    const channelName = prompt('Please enter Channel Name:');

    if (channelName) {
      try {
        db.collection('rooms').add({
          name: channelName,
        });
        
      } catch (error) {
        console.log('Error adding room', error);
      }
    }
  };

  const selectChannel = () => {};

  return (
    <SidebarOptionContainer
      onClick={addChannelOption ? addChannel : selectChannel}>
      {Icon && <Icon fontSize="small" style={{padding: 10}} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <h3>
            <span># </span> {title}
          </h3>
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  );
}

export default SidebarOption;

const SidebarOptionContainer = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding-left: 2px;
  cursor: pointer;

  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }

  > h3 {
    font-weight: 500;
  }

  > h3 > span {
    padding: 15px;
  }
`;

const SidebarOptionChannel = styled.div``;
