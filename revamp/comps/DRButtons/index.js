import React from 'react';
import styled from "styled-components";

const ButtonCont = styled.span``;

const ButtonInput = styled.button`
    background-color: ${props => props.bg};
    color: black;
    min-width: ${props => props.minW};
    max-width: 220px;
    min-height: 48px;
    padding: ${props => props.padding};
    outline: none;
    cursor: pointer;
    border-radius: 25px;
    border:${props => props.bdr};
    box-shadow:${props => props.shadow};
    font-size: ${props => props.size};
    margin-right: ${props => props.marginR};
    margin-bottom: ${props => props.marginB};
    z-index: ${props => props.zIndex};
`;

const DRButton = ({

    text="repurpose",
    bgcolor="#CCE6F4",
    padding = "14px 25px",
    minW = "135px",
    border="1px solid #247BA0",
    shadow="0px 2px 4px rgba(0,0,0,.25)",
    size = "1em",
    marginR = "",
    marginB = "",
    zIndex = "",
    onClick =() => {}

}) => {
    return <ButtonInput 
        onClick = {onClick} 
        bg={bgcolor} bdr={border} 
        minW = {minW}
        padding={padding}
        shadow ={shadow} 
        size = {size} 
        zIndex = {zIndex}
        className="ReButtons"
        marginR = {marginR}
        marginB = {marginB}>
        {text}
    </ButtonInput>
}

export default DRButton;