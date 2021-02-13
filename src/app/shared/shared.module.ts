import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common"

import { CharacterCardComponent } from "@shared/components/characterCard/characterCard.component"
import { CharacterProfileComponent } from '@shared/components/characterProfile/characterProfile.component';
import { EpisodeCardComponent } from '@shared/components/episodeCard/episodeCard.component';
import { CharacterCardProfile } from '@shared/components/characterCardProfile/characterCardProfile.component';



@NgModule({
    declarations: [
        CharacterCardComponent,
        CharacterProfileComponent,
        EpisodeCardComponent,
        CharacterCardProfile
    ],
    exports: [
        CharacterCardComponent,
        CharacterProfileComponent,
        EpisodeCardComponent,
        CharacterCardProfile
    ],
    imports:[
        CommonModule,
    ],
    providers: []
})
export class SharedModule { }
