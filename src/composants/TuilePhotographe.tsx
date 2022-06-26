import React, { useState } from 'react';
import styled from 'styled-components';
import Avatar from './Avatar';
import Boutton from './Boutton';
import InfoPhotographe from './InfoPhotographe';

const ContTuile = styled.article`
width:90%;
margin:10px auto;
padding:20px;
display:flex;
justify-content:space-between;
min-height:300px;
background-color:#FAFAFA;
border-radius:5px;
align-items:center;
`

export default function TuilePhotographe({ nom, pos, slogan, action, source }: { nom: string, pos: string, slogan: string, source: string, action: () => void }) {
    return (
        <ContTuile>
            <InfoPhotographe nom={nom} pos={pos} slogan={slogan} />
            <Boutton texte='Contactez moi !' action={action} />
            <Avatar source={source} alternatif={nom} />
        </ContTuile>
    )
}