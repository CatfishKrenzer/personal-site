import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from 'styled-components';
import DropdownMenu from '@catfishkrenzer/react-auto-dropdown-menu';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons'
//Pages
import HomePage from './pages/HomePage';
import AwsGuide from './pages/AwsGuide/AwsGuidePost';
import "./App.css";

const AppContainer = styled.main`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: white;
`;

const Header = styled.header`
  text-align: left;
  margin-left: 10px;
  z-index: 100;
`;

const MenuSectionTitle = styled.h2`
  font-size: 1em;
  margin: 5px;
`;

const MenuSectionLink = styled.a`
  margin-left: 15px;
`;

function App() {
  return (
    <AppContainer>
      <Header>
        <DropdownMenu
          title={
            <div
             style={{zIndex:'100', paddingTop:'10px'}}>
               <FontAwesomeIcon
                 icon={faBars}
                 size="2x"
                />
            </div>}
          style={{marginTop: '50px'}}
          className="menu-slide-left"
          enableChevron={true}
          dropdownLocation="full-screen"
          animate={true}
        >
          <a href="/"><MenuSectionTitle>HOME</MenuSectionTitle></a>

          <br />
          <MenuSectionTitle>PROFESSIONAL</MenuSectionTitle>
          <MenuSectionLink href="">Resume</MenuSectionLink>
          <MenuSectionLink href="">My Story</MenuSectionLink>

          <br />
          <MenuSectionTitle>ENTREPENEUR</MenuSectionTitle>
          <MenuSectionLink href="https://reefstable.com">Reef Stable</MenuSectionLink>
          <DropdownMenu title={<MenuSectionLink>Past Business Ventures</MenuSectionLink>} enableChevron={false}>
            <MenuSectionLink href="">Captured by Catfish</MenuSectionLink>
            <MenuSectionLink href="">Catfish Electronics</MenuSectionLink>
            <MenuSectionLink href="">Cash Over Coffee</MenuSectionLink>
          </DropdownMenu>

          <br />
          <DropdownMenu title={<MenuSectionTitle>BLOG</MenuSectionTitle>} enableChevron={true} children={[
            <DropdownMenu title={<MenuSectionTitle>AWS Study Guide</MenuSectionTitle>} children={[
              <DropdownMenu title={<MenuSectionTitle>Services</MenuSectionTitle>} children={[
                <MenuSectionLink href="/aws-guide/ec2">EC2</MenuSectionLink>
              ]}>
              </DropdownMenu>,
              <DropdownMenu title={<MenuSectionTitle>Topics</MenuSectionTitle>} children={[
                <MenuSectionLink href="/aws-guide/ec2">Compute</MenuSectionLink>
              ]}>
              </DropdownMenu>
              ]}>
            </DropdownMenu>
            ]}>
          </DropdownMenu>

          <br />
          <MenuSectionTitle>PROJECTS</MenuSectionTitle>
          <MenuSectionLink href="https://reefstable.com">Reef Stable</MenuSectionLink>
          <MenuSectionLink href="https://shadowmynkbooks.com">Shadow Mynk Books (WordPress)</MenuSectionLink>
          <MenuSectionLink href="https://github.com/CatfishKrenzer/">Personal Github</MenuSectionLink>
        </DropdownMenu>
      </Header>
      <Router>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/aws-guide/:guide" component={AwsGuide} />
    </Router>
    </AppContainer>
  );
}

export default App;
