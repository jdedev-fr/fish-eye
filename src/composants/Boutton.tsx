import React from 'react';
import styled from 'styled-components';

const MonBout = styled.button`
padding: 20px 10px;
border-radius:5px;
background-color:#901C1C;
border:none;
color:white;
&:hover, &:focus {
    cursor:pointer;
    background-color:#D3573C;
    color:black;
}
`

export default function Boutton({ texte, action }: { texte: string, action: () => void }) {
    return (
        <MonBout onClick={action}>{texte}</MonBout>
    )
}