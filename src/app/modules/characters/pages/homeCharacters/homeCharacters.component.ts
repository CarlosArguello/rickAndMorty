import { Component } from '@angular/core';

import { CharacterInterface } from "@shared/interfaces/charactersInterface"
import { CharacterService } from "@core/services/character.service"

@Component({
    selector: "home-characters",
    templateUrl: "./homeCharacters.component.html"
})
export class HomeCharacterComponent{

  characters: CharacterInterface[] = []
  principalCharacters: CharacterInterface[] = []
  
  constructor(
    private characterService: CharacterService 
  ){
    this.characterService.getCharacters().subscribe( ({ results }) => {
      //REMOVER LOS CARACTERES PRINCIPALES DE "Others characters of Rick and morty"
      this.characters = results.splice(5)
    })

    this.characterService.getPrincipalsCharacters().subscribe( (characters) => {
      this.principalCharacters = characters
    })
  }
}
