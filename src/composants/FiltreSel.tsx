import React, { useState } from 'react';
import styled from 'styled-components';

const Cont = styled.div`
position:relative;
`
const LeSel = styled.div`
padding: 10px 5px;
border-radius:5px;
border:none;
font-size:1.2rem;
color:white;
background-color:#901C1C;
width:200px;
overflow:hidden;
position:absolute;
`

const LeOpt = styled.div`
margin:0;
display:flex;
flex-direction:column;
&>* {
    display:flex;
    justify-content:space-between;
    margin:10px;
    color:white;
}
&>hr {
    margin:5px;
}
`

export default function FiltreSel({ valDeplie, valReplie, chgValReplie }: { valDeplie: string[], valReplie: string[], chgValReplie: (e: string[]) => void }) {
    const [bDeplie, chgBDeplie] = useState(false)



    function replie(val: string) {

        if (val === "") {
            chgBDeplie(true)
        }
        else {
            chgValReplie([val])
            chgBDeplie(false)
        }
    }
    return (
        <Cont>
            <LeSel >
                {(bDeplie) ? valDeplie.map((elem, key) => <LeOpt key={key + "d"} onClick={() => { replie(elem) }}>{(key === 0) ? "" : <hr />} <div>{elem} {(key === 0) ? <i className="fas fa-angle-up"></i> : ""}</div></LeOpt>) : valReplie.map((elem, key) => <LeOpt key={key + "p"} onClick={() => { replie('') }}><div>{elem} <i className="fas fa-angle-down"></i></div></LeOpt>)}
            </LeSel>
        </Cont>
    )
}