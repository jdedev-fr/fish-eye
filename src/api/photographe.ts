import jason from "../photographers.json"

export function getPhotographes(): Photographe[] {
    return jason.photographers
}

export function getMediaFromId(id: number): Media[] {
    return jason.media.filter(elem => elem.photographerId === id)
}

export function getPhotographeById(id: number): Photographe | null {
    let tabPhot = jason.photographers.filter(elem => elem.id === id)
    if (tabPhot.length > 0) {
        return tabPhot[0]
    }
    else {
        return null
    }
}

export interface Photographe {
    name: string
    id: number
    city: string
    country: string
    tagline: string
    price: number
    portrait: string
}

export interface Media {
    id: number
    photographerId: number
    title: string
    image?: string
    video?: string
    likes: number
    date: string
    price: number
}