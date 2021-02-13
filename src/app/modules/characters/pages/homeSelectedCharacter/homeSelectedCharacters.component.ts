import { Component } from '@angular/core';


import { ActivatedRoute } from '@angular/router';

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
    private route: ActivatedRoute,
    private characterService: CharacterService,
    private episodeService: EpisodeService
  ){

    this.characterID = this.route.snapshot.params["id"]
    characterService.getCharacterByID(Number(this.characterID)).subscribe(character => {

      this.character = character
      const episodesID = character.episode.map( mappedEpisode => {
        const splitString: string[] = mappedEpisode.split("/") 
        return splitString[splitString.length-1]
      })

      episodeService.getEpisodesByID(episodesID).subscribe( episodes => {
        console.log("episodes: ", episodes)
        if(!Array.isArray(episodes))
          this.episodes = [episodes]
        else
          this.episodes = episodes
      })
    })

  }
}
