import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Avatar from './Avatar';

const ContenerCard = styled.article`
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
width:300px;
&:hover {
    cursor:pointer;
}
`
const NomPhotographe = styled.h3`
font-size:1.4rem;
color:#D3573C;
margin:20px 0 5px 0;
`
const PositionPhotographe = styled.h4`
font-size:1.2rem;
color:#901C1C;
`

const SloganPhotographe = styled.p`
font-size:0.8rem;
color:black;
`
const TarifPhotographe = styled.p`
font-size:0.5rem;
color:#525252;
`

export default function CardPhotographe({ source, nom, pos, slogan, prix, id }: { source: string, nom: string, pos: string, slogan: string, prix: number, id: number }) {
    return (
        <ContenerCard>
            <Link to={"/photographe/" + id} >
                <Avatar source={source} alternatif={nom} />
                <NomPhotographe>{nom}</NomPhotographe>
                <PositionPhotographe>{pos}</PositionPhotographe>
                <SloganPhotographe>{slogan}</SloganPhotographe>
                <TarifPhotographe>{prix}€/jour</TarifPhotographe>
            </Link>
        </ContenerCard>
    )
}