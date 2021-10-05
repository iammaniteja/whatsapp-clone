import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    flex: 3;
    background: #f6f7f8;
`

const ChatComponent = () => {
    return(
        <Container>Chat</Container>
    )
}

export default ChatComponent;