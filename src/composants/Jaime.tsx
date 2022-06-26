import React from 'react';
import styled from 'styled-components';

const Coeur = styled.i`
display:block;
width:20px;
height:20px;
color:#901C1C;

&:hover {
    cursor:pointer;
}
`

const ContCoeur = styled.div`
padding:10px 20px;
font-size:20px;
display:flex;
color:#901C1C;
align-item:center;


`

const NbAime = styled.div`
margin:0 10px;
`

export default function Jaime({ cpt, inc }: { cpt: number, inc: (nb: number) => void }) {
    return (
        <ContCoeur>
            <NbAime>
                {cpt}
            </NbAime>
            <Coeur onClick={e => inc(cpt + 1)} >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" ></path>
                </svg>
            </Coeur>
        </ContCoeur>
    )
}