import { Component } from '@angular/core';


import { Router, ActivatedRoute } from '@angular/router';

import { EpisodeInterface } from '@shared/interfaces/episodeInterface';
import { CharacterInterface } from "@shared/interfaces/charactersInterface"

import { CharacterService } from "@core/services/character.service"
import { EpisodeService } from "@core/services/episode.service"

@Component({
    selector: "home-selected-character",
    templateUrl: "./homeSelectedCharacters.component.html"
})
export class HomeSelectedCharacterComponent{
  
  characterID: string
  character!: CharacterInterface
  episodes!: EpisodeInterface[]
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public characterService: CharacterService,
    public episodeService: EpisodeService
  ){

    this.characterID = this.route.snapshot.params["id"]
    this.initGetCharacterByID(Number(this.characterID))

  }

  initGetCharacterByID(id: number){
    this.characterService.getCharacterByID(id).subscribe(character => {

      this.character = character
      const episodesID = character.episode.map( mappedEpisode => {
        const splitString: string[] = mappedEpisode.split("/") 
        return splitString[splitString.length-1]
      })

      this.initGetEpisodesByID(episodesID)
    })
  }

  initGetEpisodesByID(episodesID: string[]){
    this.episodeService.getEpisodesByID(episodesID).subscribe( episodes => {
      if(!Array.isArray(episodes))
        this.episodes = [episodes]
      else
        this.episodes = episodes
    })
  }

  newSeachCharactersByID(characters: string[]){
    const charactersID = characters.map( character => {
      const splitString: string[] = character.split("/") 
      return splitString[splitString.length-1]
    })
    
    this.router.navigate(["/characters", "search"], { queryParams: { id: charactersID } })
  }

}
