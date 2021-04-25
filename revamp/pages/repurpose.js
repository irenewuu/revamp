import Head from 'next/head';
import React, {useState} from 'react';
import styled from 'styled-components';
import TopNav from '../comps/TopNav';
import BottomNav from '../comps/BottomNav';
import ReButton from '../comps/ReButtons';
import Background from '../comps/Background';
import Header from '../comps/Header';
import {useRouter} from 'next/router';
import BAButton from '../comps/BAButtons';


const ButtonCont = styled.div`
display: flex;
justify-content: center;
margin-top: 100px;
`;

export default function Repurpose() {

  const router = useRouter();

  return <div>
    <Head>
      <title className = "title">Repurpose</title>
    </Head>
    <div className="container flex_col">
      <TopNav />

      <Background>
        <div className = "flex_col paddingB-40">
          <Header text="what would you like to repurpose?"></Header>
          <ButtonCont>
            <BAButton
            text="tops"
            src="/sweaters.svg"
            alt="top"
            onClick={()=>router.push("/tops")}
            >
            </BAButton>
         
            <BAButton
            text="bottoms"
            src="/pants.svg"
            alt="pants"
            onClick={()=>router.push("/bottoms")}
            >
            </BAButton>
          </ButtonCont>
        </div>
      </Background>        
      <BottomNav/>
    </div>
  </div>
  }

