import { Component, Input } from '@angular/core';
import { CharacterInterface } from "@shared/interfaces/charactersInterface"

@Component({
    selector: "character-card-profile-component",
    templateUrl: "./characterCardProfile.component.html"
})
export class CharacterCardProfile{

    @Input() character!: CharacterInterface

    constructor(){
    }
}
