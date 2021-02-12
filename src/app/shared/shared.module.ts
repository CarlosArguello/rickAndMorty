
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common"

import { CharacterCardComponent } from "@shared/components/characterCard/characterCard.component"
import { CharacterProfileComponent } from '@shared/components/characterProfile/characterProfile.component';

@NgModule({
    declarations: [
        CharacterCardComponent,
        CharacterProfileComponent
    ],
    exports: [
        CharacterCardComponent,
        CharacterProfileComponent
    ],
    imports:[
        CommonModule,
    ],
    providers: []
})
export class SharedModule { }
