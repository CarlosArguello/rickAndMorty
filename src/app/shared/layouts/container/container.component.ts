import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: "container",
  templateUrl: "./container.component.html"
})
export class ContainerComponent{
  
  @Input() class:string = ""

  constructor(){

  }
  
}
