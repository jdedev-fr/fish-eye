import React, { useState } from 'react';
import styled from 'styled-components';
import Jaime from './Jaime';

const ContenerCard = styled.article`
display:flex;
justify-content:space-between;
align-items:center;
width:300px;
flex-wrap:wrap;
`
const CardImg = styled.img`
width:300px;
height:300px;
background-color:#525252;
border-radius:5px;
object-fit:cover;
`
const CardVid = styled.video`
width:300px;
height:300px;
background-color:#525252;
border-radius:5px;
object-fit:cover;
`

const TitrePhoto = styled.h3`
color:#901C1C;
font-weight:normal;
max-width:180px;
`

export default function CardPhoto({ img, video, titre, cpt, modCpt, openLight }: { img?: string, video?: string, titre: string, cpt: number, modCpt: (e: number) => void, openLight: () => void }) {
    return (
        <ContenerCard>
            {(img) ?
                <CardImg src={img} alt={titre} onClick={() => openLight()} />
                : <CardVid src={video} onClick={() => openLight()} />}
            <TitrePhoto>{titre}</TitrePhoto>
            <Jaime cpt={cpt} inc={modCpt} />
        </ContenerCard>

    )
}