import Logo from "../composants/Logo"
import { getPhotographes, Photographe } from "../api/photographe"

import styled from 'styled-components';
import { useEffect, useState } from "react";
import CardPhotographe from "../composants/CardPhotographe";

const MyHeader = styled.header`
width:100%;
padding:5px 20px;
display:flex;
justify-content:space-between;
align-items:center;
`
const MyContener = styled.div`
width:1100px;
display:flex;
flex-direction:column;
margin:0 auto;
`
const MySection = styled.section`
display:flex;
justify-content:space-between;
flex-wrap:wrap;
margin:20px auto;
&>* {
    margin:10px;
}
`
const ZoneTexte = styled.p`
color:#901C1C;
font-size:2rem;
`
export default function IndexPage() {
    let init: Photographe[] = []
    const [photographes, setPhotographes]: [Photographe[], (e: Photographe[]) => void] = useState(init)
    useEffect(() => {
        setPhotographes([...getPhotographes()])
    }, [])
    return (
        <MyContener>
            <MyHeader>
                <Logo></Logo>
                <ZoneTexte>Nos photographes</ZoneTexte>
            </MyHeader>
            <MySection>
                {photographes.map((elem, key) => <CardPhotographe key={key} id={elem.id} source={"imgs/Photographers/" + elem.portrait} nom={elem.name} pos={elem.city + ", " + elem.country} slogan={elem.tagline} prix={elem.price} />)}
            </MySection>
        </MyContener>
    )
}