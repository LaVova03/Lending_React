import './Main.css';
import React from 'react';
import StartPage from '../../components/StartPage/StartPage';
import PhotoNatali2 from '../../components/PhotoNatali2/PhotoNatali2';
import Page3Crown from '../../components/Page3Crown/Page3Crown';
import PageFour from '../../components/PageFour/PageFour';
import Page5Prescription from '../../components/Page5Prescription/Page5Prescription';
import Page6Business from '../../components/Page6Business/Page6Business';
import Page7Achievements from '../../components/Page7Achievements/Page7Achievements';
import Page8Chess from '../../components/Page8Chess/Page8Chess';
import Page9Fond from '../../components/Page9Fond/Page9Fond';

function Main() {
  return (
    <div className="Main">
      <StartPage />
      <PhotoNatali2 />
      <Page3Crown />
      <PageFour />
      <Page5Prescription />
      <Page6Business />
      <Page7Achievements />
      <Page8Chess />
      <Page9Fond />
    </div>
  );
}

export default Main;
