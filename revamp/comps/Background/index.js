import React, { Children } from 'react'
import styled from 'styled-components';

const BackgroundDiv = styled.div`
    width:342px;
    min-height:600px;
    background-color: #fff;
    border-style: solid;
    border-color: #CCCCCC;
    border-width: 1px;
    position: relative;    
    top: 110px;
    bottom: 110px;
    margin-bottom: 210px;
    padding: ${props=>props.padding};
    padding-top: ${props=>props.paddingTop};
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    margin-bottom: 210px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    background-color: ${props=>props.bgcol};
`;

const Background = ({
    children = null,
    padding="40px 20px",
    bgcol="#FFFFFF",
    paddingTop = null
}
) =>{

    return <BackgroundDiv padding={padding} bgcol={bgcol} paddingTop={paddingTop}>
        {children}    
    </BackgroundDiv>
}

export default Background;