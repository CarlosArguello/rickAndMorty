export interface CharacterInterface{
    id: number,
    name: string,
    gender: string,
    image: string,
    species: string,
    status: string,
    url: string,
    episode: string[],
    location: LocationCharacterInterface,
    origin: LocationCharacterInterface,
    type?: string,
    created?: string
}

export interface LocationCharacterInterface{
    name: string,
    url: string
}