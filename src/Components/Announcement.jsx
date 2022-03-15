import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
   height: 35px;
   background-color: silver; 
    
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display:flex;
    align-items: center;
    jsutify-content: space-between;

`;

const Left = styled.div`
    align-items:center;
    flex:1;
`;

const Center = styled.div`
    flex:1;
    align-items:center;
    cursor:pointer;
`;

const Right = styled.div`


`;
const Announcement = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
            
                </Left>
                <Center>
                   | Help | Membership | Blog | Account | Wish List | 
                </Center>
                <Right>

                </Right>
            </Wrapper>
        </Container>
    )
}

export default Announcement
