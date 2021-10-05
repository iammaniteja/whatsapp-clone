import { useState } from 'react';
import styled from 'styled-components';
import ChatComponent from './Components/ChatComponent';
import ListComponent from './Components/ListComponent';

const Container = styled.div `
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100%;
  background: #f8f9fb;
`

const InitialScreen = styled.div `
  /* background: white; */
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: rgb(0,0,0,0.45);
  gap: 10px;
  span {
    font-size: 32px;
    color: #525252;
  }
`;

const PlaceholderImage = styled.img `
  height: 250px;
  width: 250px;
  object-fit: contain;
  border-radius: 50%;
`;

function App() {
  const [chatSelected, setChatSelected] = useState();
  return (
    <Container>
      <ListComponent setChatSelected = {setChatSelected}/>
      {!chatSelected? <InitialScreen>
        <PlaceholderImage src = "/welcome-placeholder.jpeg"/>
        <span>Keep your Phone Connected</span>
        Whatsapp Connects to your phone to sync messages.
      </InitialScreen> : <ChatComponent selectedChat = {chatSelected} />}
    </Container>
  );
}

export default App;
