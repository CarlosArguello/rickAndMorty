import { Component, Input } from '@angular/core';
import { EpisodeInterface } from '@shared/interfaces/episodeInterface';


@Component({
    selector: "episode-card-component",
    templateUrl: "./episodeCard.component.html"
})
export class EpisodeCardComponent{

    @Input() episode!: EpisodeInterface

    constructor(){
    }
}
