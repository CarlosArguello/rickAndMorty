import { Component } from '@angular/core';


import { ActivatedRoute } from '@angular/router';

import { CharacterInterface } from "@shared/interfaces/charactersInterface"
import { CharacterService } from "@core/services/character.service"

@Component({
    selector: "search-character",
    templateUrl: "./searchCharacter.component.html"
})
export class SearchCharacterComponent{
  
  characters: CharacterInterface[] = []

  constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute
  ){

    this.route.queryParams.subscribe( params => {
      if(!params.id)
        this.initSearchCharacters(params)
      else
        this.initGetCharactersByID(params.id)

    })
  }

  initSearchCharacters(params: any){
    this.characterService.searchCharacters(params).subscribe( 
      ({ results }) => {
        this.characters = results
      },
      (error) => {
        this.characters = []
      }
    )
  }

  initGetCharactersByID(ids: string){
    this.characterService.getCharactersByID(ids).subscribe( (characters) => {
      if(Array.isArray(characters))
        this.characters = characters
      else
        this.characters = [characters]
    })
  }



}
