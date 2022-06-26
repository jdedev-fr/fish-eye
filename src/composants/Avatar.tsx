import React, { useState } from 'react';
import styled from 'styled-components';

const MonAvatar = styled.img`
border-radius: 50%;
aspect-ratio: 1/1;
width:200px;
object-fit:cover;
object-position: 50% 50%;
`

export default function Avatar({ source, alternatif }: { source: string, alternatif: string }) {
    return (
        <MonAvatar src={source} alt={alternatif} />
    )
}