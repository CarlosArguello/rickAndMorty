import { Injectable } from "@angular/core"
import { HttpClient, HttpParams } from "@angular/common/http"

//import { RickAndMortyDefaultInterface } from "@shared/interfaces/rickAndMortyDefaultInterface"
import { EpisodeInterface } from '@shared/interfaces/episodeInterface';


@Injectable({
    providedIn: "root"
})
export class EpisodeService{

    constructor(private _http: HttpClient){

    }

    getEpisodesByID(ids: string[]){
        return this._http.get<EpisodeInterface>(`https://rickandmortyapi.com/api/episode/${ ids.toString() }`)
    }
}
