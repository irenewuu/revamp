//import React from 'react';
import styled from 'styled-components';
import React, {useState} from 'react';
import {locOptions} from '../../data/texts'; 

const LocationCont = styled.div`
  display: inline-flex;  
  flex-direction: row;
  min-width: 300px;
  margin-bottom: ${props => props.marginB}px;
  &>* {
    color:#000;
  }
`;

const TextCont = styled.div`
  display: flex;
  min-width: 150px;
  max-width: 180px;
  flex-direction: column;
  flex: 1;
  margin-right: 20px;
  justify-content: center;
`;

const LocationTitle = styled.h6`
  font-family: 'Lexend Giga';
  font-size: 1em;
  font-weight: 400;
  line-height: 1.5em;
  margin: 0;
  margin-bottom: 5px;
`;

const LocationText = styled.p`
  font-family: "Montserrat";
  font-size: 1em;
  font-weight: 400;
  line-height: 1.5em;
  margin: 0;
`;

const IconCont = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100px;
`;

const IconA = styled.a`
  display: block;  
  href = "#";
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Icon = styled.div`
  width: 68px;
  height: 56px;
  margin-bottom: 10px;
 `

 const LocationImg = styled.img`
  display: block;  
 `

 const Click = styled.div`
  width: 100px;
  text-decoration: underline;
  color: #14455A;
  font-size: 12px;
  text-align: center;
  `

const Location = ({
  doTitle = "Location 1:",
  text = "Charitable Impact Vancouver, West End",
  marginB = 35  
}) => {
  
  return <LocationCont marginB = {marginB}>
    
    <TextCont>
      <LocationTitle>{doTitle}</LocationTitle>    
      <LocationText>{text}</LocationText>
    </TextCont>

    <IconCont>
      <IconA>
        <Icon>
          <LocationImg src="/icon_location.svg"/>
        </Icon>
        <Click >Click for more information</Click>
      </IconA>
    </IconCont>

  </LocationCont>
}

export default Location;