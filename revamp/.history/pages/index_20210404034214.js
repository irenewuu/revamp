import Head from 'next/head'
// import styles from '../styles/Home.module.css'

import Location from '../comps/Location';
import styled from 'styled-components';

const HomeCont=styled.div`
  .header{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;   
    padding: 20px; 
  }

  .bottom {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;

    .left{
      display: flex;      
      padding: 10px;
    }

    .right{
      padding: 10px;
    }
  }
`;

export default function Home() {
  return (<HomeCont>
    <Head>
      <title className = "title">Location</title>
    </Head>
    <div className="header">Location comps</div>
    <div className="bottom">
      <div className="left">
        <Location></Location>
      </div>
    </div>
  </HomeCont>
  )
}