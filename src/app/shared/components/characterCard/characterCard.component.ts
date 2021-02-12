import { Component, Input } from '@angular/core';
import { CharacterInterface } from "@shared/interfaces/charactersInterface"

@Component({
    selector: "character-card-component",
    templateUrl: "./characterCard.component.html"
})
export class CharacterCardComponent{

    @Input() character!: CharacterInterface

    constructor(){
    }
}
