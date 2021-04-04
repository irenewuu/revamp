import React from 'react';
import styled from 'styled-components';


const LocationCont = styled.div`
  display: inline-flex;  
  flex-direction: row;
  padding: 5px;
  max-width: 300px;
  &>* {
    color:#000;
  }
`;

const TextCont = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const IconCont = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100px;
`;

const LocationTitle = styled.h6`
  font-family: "Montserrat"
  font-size: 1em;
  font-weight: 500;
`;

const LocationTxt = styled.p`
  font-family: "Montserrat"
  font-size: 1em;
  font-weight: 400;
`;

const LocationTxt

const Location = () => {

  return <LocationCont>
    
    <LocationTitle>Location 1</LocationTitle>
    <TextCont
    <LocationTxt>Charitable Impact<br></br>Vancouver, West End</LocationTxt>


  </LocationCont>
}

export default Location;
