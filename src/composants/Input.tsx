import React from 'react';
import styled from 'styled-components';

const InputStyled = styled.input`
padding: 20px 10px;
border-radius:5px;
font-size:1.2rem;
min-width:400px;
`

export default function InputDesign({ ph, val, chg }: { ph: string, val: string, chg: (e: React.FormEvent<HTMLInputElement>) => void }) {
    return (
        <InputStyled placeholder={ph} value={val} onChange={(e: React.FormEvent<HTMLInputElement>) => chg(e)} />
    )
}