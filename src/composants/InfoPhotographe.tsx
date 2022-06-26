import React, { useState } from 'react';
import styled from 'styled-components';

const ContInfo = styled.div`
display:flex;
flex-direction:column;
align-items:start;
&>* {
    margin:7px 0;
}
`
const NomPhotographe = styled.h3`
font-size:2rem;
color:#D3573C;
`
const PositionPhotographe = styled.h4`
font-size:1.4rem;
color:#901C1C;
`

const SloganPhotographe = styled.p`
font-size:1rem;
color:black;
`
export default function InfoPhotographe({ nom, pos, slogan }: { nom: string, pos: string, slogan: string }) {
    return (
        <ContInfo>
            <NomPhotographe>{nom}</NomPhotographe>
            <PositionPhotographe>{pos}</PositionPhotographe>
            <SloganPhotographe>{slogan}</SloganPhotographe>
        </ContInfo>
    )
}