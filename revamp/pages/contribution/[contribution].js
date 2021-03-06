import Head from 'next/head'
import React, {useState} from 'react';
import {useRouter} from 'next/router';
import styled, { withTheme } from 'styled-components';

//importing comps
import Background from '../../comps/Background';
import BackImage from '../../comps/BackImage';
import TopNav from '../../comps/TopNav';
import BottomNav from '../../comps/BottomNav';
import Header from '../../comps/Header';
import Contribution from '../../comps/Contribut';
import Para from '../../comps/Paragraph';
import DRButton from '../../comps/DRButtons';

const HomeCont = styled.div`
  .header{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;   
    font: 32px 'Lexend Giga';
    color: #14455A;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
  }

  .cont_header {
    margin-bottom: 40px;
  }

  .cont_imgCont
  {
    width: 180px;
    height: 180px;  
    margin-bottom: 30px;
    position: relative;
    padding-top: 20px;
  }
`;

const HeartImg = styled.img`
  display: block;
  width: 70px; height: auto;  
  object-fit: contain;
  position: absolute;
  top: 0; right: 0;
  transform: rotate(30deg);
`
const ContImg = styled.img`
  display: block;
  width: 100%; height: 100%;  
  object-fit: contain;
`
const BadgeCont = styled.div`
  display: flex;
  width: 100px;
  height: 100px;
  background-color: #CCE6F4;
  border-radius: 50%;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-bottom: 20px;
  border: solid 2px #14455A;
`

const Question = styled.img`
text-align: center;
margin: 0 auto;
width: 70px;
height: 70px;
`
const BadgeTitle = styled.h4``
const Content = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export default function contribution(){

  var ContTitle="";
  var text=""; 
  var src="";
  
  const router = useRouter();
  const {contribution} = router.query;  

  if(contribution === "bottom"){
    ContTitle = "Contribution - Bottom"
    text = "one pair of jeans uses about 20,000L of water"
    src = "/icon_bttm_cont.svg"
  }

  if(contribution === "top"){
    ContTitle = "Contribution - Top"
    text = "one cotton t-shirt uses about 2,700L of water"
    src = "/icon_top_cont.svg"
  }


  const GetBadge = () =>{
    var unlocks = localStorage.getItem("unlocks")
    unlocks = JSON.parse(unlocks);
    unlocks.badge.push(1)
    localStorage.setItem("unlocks", JSON.stringify(unlocks));
    
    // styles =====================================================
    var hidebadge = document.getElementById("badge")
    hidebadge.src = "/badge.svg";
    hidebadge.style.width = "110px";
    hidebadge.style.height = "110px";

    var badgeDiv = document.getElementById("badgeDiv")
    badgeDiv.style.backgroundColor = "white";
    badgeDiv.style.border = "none";
    badgeDiv.style.marginBottom = "50px";

    var badgebtn = document.getElementById("badgebtn")
    badgebtn.style.display = "none";

    var contents = document.getElementById("contContent")
    contents.style.display = "flex";
  }
  
  return <HomeCont>
  <Head>
  <title className = "title">{ContTitle}</title>
  </Head>

  <div className="container flex_col">
      <BackImage /> 
      <TopNav />
      <Background> 
        <div className = "flex_col">

          <Header
            text = "thank you for contributing to sustainabillity!" 
            h2Margin = "0 0 30px"
            h2Size = "1.65em" />

          <BadgeTitle>you got a badge!</BadgeTitle>
          <BadgeCont id="badgeDiv">
            <Question className="question" id="badge" src="/question-mark.svg" />
          </BadgeCont>
          <div id="badgebtn">
            <DRButton text="Claim Your Badge!" 
            onClick={GetBadge} 
            marginB="40px" />
          </div>

          <Content id="contContent">
            <Para pMargin = "0 0 40px" pMax = "100%">
              by completing this DIY and repurposing your clothes, you took a step with helping sustainability.
            </Para>
            <Contribution className="flex_row"
              src = {src}
              text = {text}       
            />
            <Para pMargin = "0 0 30px" pMax = "100%">
              this means you helped contribute to conserving water usage and keeping our planet happy <br/>and healthy.
            </Para>

            <div className="cont_imgCont flex">
              <HeartImg  src ="/heart.gif"/>
              <ContImg src ="/giphy.gif"/>
            </div>

            <DRButton 
              onClick = {() => router.push("/popular_page")}
              padding = "14px 35px"
              shadow = "0px 2px 4px rgba(0,0,0,.25)" text = "Back to Home" size = "1em" marginB = "20px">
            </DRButton>
          </Content>
        </div>

    </Background>
    <BottomNav />
  </div>
</HomeCont>
}

