import React from 'react';
import styled from 'styled-components';
import {FlexRowDiv, FlexColumnDiv} from '../components/Common';

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20vh auto 0;
`;

const HomePageImage = styled.img`
  transform: skew(20deg);
  position: absolute;
  width: 140%;
  left: -20%;
  top: -25%;
`;

const HomePageImageFrame = styled.div`
  width: 40vw;
  height: 40vw;
  max-width: 300px;
  max-height: 300px;
  transform: skew(-20deg);
  background-color: red;
  overflow: hidden;
  text-align: center;
  position: relative;
  margin-left: 10%;
`;

const HomePageImageAccent = styled.div`
  width:  ${props => `${props.width}vw`};
  max-width:  ${props => `${2*props.width}0px`};
  height: 40vw;
  max-height: 300px;
  transform: skew(-20deg);
  background-color: red;
  margin-left: 2vw;
`;

const HomePageAboutText = styled.h2`
  margin: 0;
  font-size: 2vh;
  text-align: center;
  font-family: Oswald;
  font-weight: 400;
`;

const HomePageAboutTextContainer = styled(FlexColumnDiv)`
  width: fit-content;
  margin: 0px auto;
`
const HomePage = () => {
  return (
    <HomePageContainer>
      <FlexRowDiv>
        <HomePageImageFrame>
          <HomePageImage src="https://reefstable.com/FounderProfileImage.jpg"/>
        </HomePageImageFrame>
        <HomePageImageAccent width="5"/>
        <HomePageImageAccent width="3"/>
      </FlexRowDiv>
      <FlexColumnDiv>
        <FlexRowDiv style={{margin: '20px auto 10px'}}>
          <h1 style={{fontSize: '5vh', fontFamily: 'Montserrat', fontWeight:'400', color:'white', margin: '0'}}>John</h1>
          <h1 style={{fontSize: '5vh', fontFamily: 'Montserrat', fontWeight:'400', color:'white', margin: '0px 0.5em'}}>|</h1>
          <h1 style={{fontSize: '5vh', fontFamily: 'Montserrat', fontWeight:'100', color:'orange', margin: '0'}}>Krenzer</h1>
        </FlexRowDiv>
        <HomePageAboutTextContainer>
          <HomePageAboutText style={{fontSize: '4vh'}}>- Software Engineer -</HomePageAboutText>
          <HomePageAboutText style={{marginTop: '20px'}}>Entrepeneur</HomePageAboutText>
          <HomePageAboutText>Saltwater Aquarist</HomePageAboutText>
          <HomePageAboutText>Powerlifter / Gym Rat</HomePageAboutText>
        </HomePageAboutTextContainer>
      </FlexColumnDiv>
    </HomePageContainer>
  );
}

export default HomePage;
