import { Injectable } from "@angular/core"
import { HttpClient, HttpParams } from "@angular/common/http"

import { RickAndMortyDefaultInterface } from "@shared/interfaces/rickAndMortyDefaultInterface"
import { CharacterInterface } from "@shared/interfaces/charactersInterface"

@Injectable({
    providedIn: "root"
})
export class CharacterService{

    mainCharactersID: number[] = [1,2,3,4,5]

    constructor(private _http: HttpClient){

    }

    getCharacters(){
        
        const page = Math.floor((Math.random() * (10 - 2 + 1)) + 2).toString();

        const params = new HttpParams().append("page", page)
        return this._http.get<RickAndMortyDefaultInterface>("https://rickandmortyapi.com/api/character", {
            params
        })
    }

    getPrincipalsCharacters(){
        
        return this._http.get<CharacterInterface[]>(`https://rickandmortyapi.com/api/character/${this.mainCharactersID.toString()}`)
    }
}
