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

function App() {
  return (
    <Container>
      <ListComponent />
      <ChatComponent />
    </Container>
  );
}

export default App;
