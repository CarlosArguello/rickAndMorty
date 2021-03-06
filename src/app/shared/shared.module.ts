
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common"

import { CharacterCardComponent } from "@shared/components/characterCard/characterCard.component"
import { CharacterProfileComponent } from '@shared/components/characterProfile/characterProfile.component';
import { EpisodeCardComponent } from '@shared/components/episodeCard/episodeCard.component';
import { CharacterCardProfile } from '@shared/components/characterCardProfile/characterCardProfile.component';

import { ContainerComponent } from '@shared/layouts/container/container.component';
import { NavegationComponent } from '@shared/layouts/navegation/navegation.component';



@NgModule({
    declarations: [
        CharacterCardComponent,
        CharacterProfileComponent,
        EpisodeCardComponent,
        CharacterCardProfile,
        NavegationComponent,
        ContainerComponent
    ],
    exports: [
        CharacterCardComponent,
        CharacterProfileComponent,
        EpisodeCardComponent,
        CharacterCardProfile,
        NavegationComponent,
        ContainerComponent
    ],
    imports:[
        CommonModule,
    ],
    providers: []
})
export class SharedModule { }
