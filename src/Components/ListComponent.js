import styled from 'styled-components'
import {contactList} from '../mockData';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    flex: 1.6;
`;
const Profile = styled.div`
    display: flex;
    flex-direction: row;
    background: #ededed;
    padding: 10px;
`;

const ProfileImg = styled.img`
    height: 32px;
    width: 32px;
    border-radius: 50%;
`;
const SearchBox = styled.div`
    background: #f6f6f6;
    padding: 10px;
    display: flex;
`;
export const SearchContainer = styled.div`
    display: flex;
    flex-direction: row;
    background: white;
    border-radius: 16px;
    width: 100%;
    padding: 5px 10px;
`;

const SearchIcon = styled.img`
    height: 28px;
    width: 28px;
`;
export const SearchInput = styled.input`
    width: 100%;
    outline: none;
    border: none;
    font-size: 15px;
    margin-left: 10px;
`;

const ContactItem = styled.div `
    display: flex;
    flex-direction: row;
    /* width: 100%; */
    border-bottom: 1px solid #f2f2f2;
    background: white;
    cursor: pointer;
    padding: 15px 12px;
    :hover {
        background: #ebebeb;
    }
`;

const ProfileIcon = styled(ProfileImg) `
    width: 38px;
    height: 38px;
`;

const ContactInfo = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0px 12px;
`;

const ContactName = styled.span `
    width: 100%;
    font-size: 16px;
    color: black;
`;

const LatestMessage = styled.span `
    width: 100%;
    font-size: 14px;
    color: rgba(0,0,0,0.8);
    margin-top: 3px;
`;

const MessageTime = styled.span `
    font-size: 12px;
    margin-right: 10px;
    color: rgba(0,0,0,0.45);
    white-space: nowrap;
`;

const ContactComponent = (props) => {
    const {
        id,
        name,
        profilePic,
        lastText,
        lastTextTime} = props.details;
    return (
        <ContactItem onClick = {() => props.setChatSelected(props.details)}>
            <ProfileIcon src={profilePic}/> 
            <ContactInfo>
                <ContactName>{name}</ContactName>
                <LatestMessage>{lastText}</LatestMessage>
            </ContactInfo>
            <MessageTime>{lastTextTime}</MessageTime>
        </ContactItem>
    )
}

const ListComponent = (props) => {
    return(
        <Container>
            <Profile>
                <ProfileImg src = "/Profile/mani.jpeg"></ProfileImg>
            </Profile>
            <SearchBox>
                <SearchContainer>
                    <SearchIcon src = "/search-icon.svg" />
                    <SearchInput placeholder = "Search or start a new chat" />
                </SearchContainer>
            </SearchBox>
            {contactList.map (
                (contact) => (
                <ContactComponent details = {contact} setChatSelected = {props.setChatSelected}/>)
            )}
        </Container>
    )
}

export default ListComponent;