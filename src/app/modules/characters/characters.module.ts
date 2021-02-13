import { NgModule } from '@angular/core';

import { CommonModule } from "@angular/common"
import { SharedModule } from "@shared/shared.module"
import { RouterModule } from '@angular/router';

import { HomeCharacterComponent } from "@app/modules/characters/pages/homeCharacters/homeCharacters.component"
import { HomeSelectedCharacterComponent } from '@app/modules/characters/pages/homeSelectedCharacter/homeSelectedCharacters.component';


@NgModule({
    declarations: [
        HomeCharacterComponent,
        HomeSelectedCharacterComponent
    ],
    exports: [
        HomeCharacterComponent,
        HomeSelectedCharacterComponent
    ],
    imports:[
        CommonModule,
        RouterModule,
        SharedModule
    ],
    providers: []
})
export class CharactersModule { }
