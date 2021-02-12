import { NgModule } from '@angular/core';

import { CommonModule } from "@angular/common"
import { SharedModule } from "@shared/shared.module"
import { RouterModule } from '@angular/router';

import { HomeCharacterComponent } from "@app/modules/characters/pages/homeCharacters/homeCharacters.component"

@NgModule({
    declarations: [
        HomeCharacterComponent
    ],
    exports: [
        HomeCharacterComponent
    ],
    imports:[
        CommonModule,
        RouterModule,
        SharedModule
    ],
    providers: []
})
export class CharactersModule { }
