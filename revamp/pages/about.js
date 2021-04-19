import Head from 'next/head'

import TopNav from '../comps/TopNav';
import BottomNav from '../comps/BottomNav';
import Header from '../comps/Header';
import DRButton from '../comps/DRButtons';

import styled from 'styled-components';
import React, {useState} from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';

const HomeCont = styled.div``;

export default function Home() {

  const router = useRouter();

  return <HomeCont>
    <Head>
      <title className = "title">Welcome</title>
    </Head>

    <TopNav />
    <div className="container flex_col">
      {/* remove className "paddingBottom" if you dont like
      the extra padding at the bottom of the white container */}
      <div className="backgroundDiv">
        <div className = "flex_col">

        <Header text="about us"></Header>
          <p>Meet our team!</p>
          <img src="/team.svg" alt="Youn Soo, Maria, Irene, Montana" className="margin-20"></img>
            <p className="alignCenter">Our group came up with reVamp because we all 
            care about sustainability, and how things are recycled.
             reVamp is meant to help people who are unsure about what
              to do with their old clothes, whether its how to recycle
               or where to donate. We are here to help you! With donation 
               locations as well as ways to upcycle your old clothes, 
               we have you covered. We hope you enjoy reVamp as much 
               as we do.</p>

        </div>
      </div>
      <BottomNav />
    </div>
  </HomeCont>
  
}