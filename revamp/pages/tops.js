import Head from 'next/head';
import React, {useState} from 'react';
import styled from 'styled-components';
import TopNav from '../comps/TopNav';
import BottomNav from '../comps/BottomNav';
import ReButton from '../comps/ReButtons';
import Header from '../comps/Header';
import BAButton from '../comps/BAButtons';
import {useRouter} from 'next/router';

const ButtonCont = styled.div`
display: flex;
justify-content: center;
margin-top: 100px;
`;

export default function Repurpose() {
    const router = useRouter();
    return <div>
    <Head>
      <title className = "title">Repurpose - Tops</title>
    </Head>

    <div className="container flex_col">
      <TopNav />
      <div className="backgroundDiv">

        <div className = "flex_col">
            <Header text="what is your skill level of crafting?"></Header>
            <ButtonCont>
            <BAButton 
            text="beginner"
            src="/beginner.svg"
            margin="auto"
            marginb="10px"
            onClick={()=>router.push("/tops_beginner")}
            />
            <BAButton 
            text="advanced"
            src="/advanced.svg"
            marginb="10px"
            onClick={()=>router.push("/tops_advanced")}
            />
            </ButtonCont>
        </div>
        </div>
        <BottomNav />
        </div>
    </div>
  }

