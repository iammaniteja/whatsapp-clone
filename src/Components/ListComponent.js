import styled from 'styled-components'

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
`;
const SearchContainer = styled.div`
    display: flex;
    flex-direction: row;
    background: white;
    border-radius: 16px;
    /* width: 100%; */
    padding: 5px 10px;
`;

const SearchIcon = styled.img`
    height: 28px;
    width: 28px;
`;
const SearchInput = styled.input`
    width: 100%;
    outline: none;
    border: none;
    font-size: 15px;
`;

const ContactItem = styled.div `
    display: flex;
    flex-direction: row;
    width: 100%;
    border-bottom: 1px solid #f2f2f2;
    background: white;
    cursor: pointer;
    padding: 15px 12px;
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

const ContactComponent = () => {
    return (
        <>
            <ContactItem>
                <ProfileIcon src='/Profile/Akhil.jpeg'/> 
                <ContactInfo>
                    <ContactName>Akhil Ch </ContactName>
                    <LatestMessage>Mowa</LatestMessage>
                </ContactInfo>
            </ContactItem>
            <ContactItem>
                <ProfileIcon src='/Profile/Avinash.jpeg'/> 
                <ContactInfo>
                    <ContactName>Avinash K </ContactName>
                    <LatestMessage>Bro</LatestMessage>
                </ContactInfo>
            </ContactItem>
            <ContactItem>
                <ProfileIcon src='/Profile/Srikanth.jpeg'/> 
                <ContactInfo>
                    <ContactName>Srikanth</ContactName>
                    <LatestMessage>Areyy Bro</LatestMessage>
                </ContactInfo>
            </ContactItem>
        </>
    )
}

const ListComponent = () => {
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
            <ContactComponent />
        </Container>
    )
}

export default ListComponent;