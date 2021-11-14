import styled from 'styled-components';
import {SearchContainer, SearchInput} from './ListComponent';
import {messagesList} from '../mockData';
import Picker from 'emoji-picker-react';
import { useState } from 'react';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    flex: 3;
    background: #f6f7f8;
`
const ChatHeader = styled.div `
    display: flex;
    flex-direction: row;
    background: #ededed;
    padding: 10px;
    align-items: center;
    gap: 10px;
`
const ProfileImg = styled.img`
    height: 32px;
    width: 32px;
    border-radius: 50%;
`;

const ChatBox = styled.div `
    display: flex;
    background: #f0f0f0;
    padding: 10px;
    align-items: center;
    bottom: 0px;
`;

const EmojiIcon = styled.img`
    height: 22px;
    width: 22px;
    opacity: 0.4;
    cursor: pointer;
`;

const MessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    background: #e5ddd6;
    overflow-y: auto;
`

const MessageDiv = styled.div `
    justify-content: ${props => props.Received?  'flex-start' : 'flex-end'};
    display: flex;
    margin: 5px 15px;
`
const Message = styled.div `
    border-radius: 5px;
    background: ${props => props.Received?  'white' : '#daf8cb'};;
    max-width: 50%;
    color: #303030;
    padding: 8px 10px;
    font-size: 14px;
`

const ChatComponent = (props) => {
    const {selectedChat} = props;
    const [text, setText] = useState('');
    const [messageList, setMessageList] = useState(messagesList);
    const [showEmoji, setShowEmoji] = useState(false);
    const onEmojiClick = (event, emoji) => {
        setText(text+emoji.emoji);
        setShowEmoji(false);
    };
    const messageEntered = (event) => {
        if(event.key === "Enter") {
            const messages = [...messageList];
            messages.push({
                id: 0,
                messageType: "TEXT",
                text: text,
                senderID: 0,
                addedOn: "12:00 PM"
            });
            setMessageList(messages);
            setText("");
        }
    }
    return(
        <Container>
            <ChatHeader>
                <ProfileImg src={selectedChat.profilePic}/> {selectedChat.name}
            </ChatHeader>
            <MessageContainer>
                {messageList.map((message) => {
                    return (
                        <MessageDiv Received = {!!message.senderID}>
                            <Message Received = {!!message.senderID}>
                                {message.text}
                            </Message>
                        </MessageDiv>
                        )
                    })
                }
            </MessageContainer>
            <ChatBox>
                <SearchContainer>
                    {showEmoji ? <Picker 
                        pickerStyle = {{position: "absolute", bottom: "60px"}}
                        onEmojiClick={onEmojiClick} />
                        : null
                    }
                    <EmojiIcon onClick = {() => setShowEmoji(!showEmoji)} src="/data.svg" />
                    <SearchInput placeholder = "Type a message" value={text} onChange = {(e) => setText(e.target.value)} onKeyDown = {messageEntered} />
                </SearchContainer>
            </ChatBox>
        </Container>
    )
}

export default ChatComponent;