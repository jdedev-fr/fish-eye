import Logo from "../composants/Logo"
import { getMediaFromId, Media, getPhotographeById, Photographe } from "../api/photographe"

import styled from 'styled-components';
import { useEffect, useState } from "react";
import CardPhotographe from "../composants/CardPhotographe";
import { useParams } from "react-router-dom";
import CardPhoto from "../composants/CardPhoto";
import TuilePhotographe from "../composants/TuilePhotographe";

const MyHeader = styled.header`
width:100%;
padding:5px 20px;
display:flex;
justify-content:flex-start;
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
const LightBox = styled.section`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background-color:rgba(0,0,0,0.4);
`

export default function PhotographePage() {
    const [media, setMedia]: [Media[], (e: Media[]) => void] = useState([] as Media[])
    const [statutLightBox, setStatutLightBox]: [boolean, (e: boolean) => void] = useState(false as boolean)

    let ph: Photographe | null = {
        name: "test",
        city: "test",
        id: 0,
        country: 'test',
        tagline: "",
        price: 0,
        portrait: ""

    }
    const [photographe, setPhotographe]: [Photographe | null, (e: any) => void] = useState(ph)
    const [dossPhot, setDossPhot]: [string, (e: string) => void] = useState("")
    const { id } = useParams()
    let photographeId: number = parseInt((id) ? id : "0")


    useEffect(() => {
        setMedia(getMediaFromId(photographeId))
        setPhotographe(getPhotographeById(photographeId))
    }, [])
    useEffect(() => {
        setDossPhot("/imgs/" + photographe.name.split(" ")[0].replace("-", " ") + "/")
    }, [photographe])

    function openLightBox(idMedia: number) {
        setStatutLightBox(!statutLightBox)
    }
    function addLikeMedia(idMedia: number) {
        let medCopie = [...media]
        let med = media.findIndex(elem => elem.id === idMedia)
        if (med) {
            medCopie[med].likes = medCopie[med].likes + 1
        }
        setMedia([...medCopie])
    }
    return (
        <MyContener>
            <MyHeader>
                <Logo />
            </MyHeader>
            {(photographe as Photographe) ?
                <TuilePhotographe nom={photographe.name} pos={photographe.city + ", " + photographe.country} slogan={photographe.tagline} source={"/imgs/Photographers/" + photographe.portrait} action={() => { }} />
                : ""}
            <MySection>
                {media.map((elem, key) => <CardPhoto key={key} img={(elem.image) ? dossPhot + elem.image : undefined} video={(elem.video) ? dossPhot + elem.video : undefined} titre={elem.title} cpt={elem.likes} modCpt={() => addLikeMedia(elem.id)} openLight={() => openLightBox(elem.id)} />)}
            </MySection>
            {(statutLightBox) ?
                <LightBox></LightBox>
                : ""}
        </MyContener>
    )
}