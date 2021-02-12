import { Component, Input } from '@angular/core';
import { CharacterInterface } from "@shared/interfaces/charactersInterface"

@Component({
    selector: "character-profile-component",
    templateUrl: "./characterProfile.component.html"
})
export class CharacterProfileComponent{

    @Input() character!: CharacterInterface

    constructor(){
    }
}
