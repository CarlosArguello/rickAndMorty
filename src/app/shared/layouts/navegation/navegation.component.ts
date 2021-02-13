import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: "navegation-component",
    templateUrl: "./navegation.component.html"
})
export class NavegationComponent{

  search: string = ""

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ){
    this.route.queryParams.subscribe( params => {
      if(params.name.length)
        this.search = params.name
    })
  }

  

  setSearchCharacter(event: any){

    this.search = event.target.value

    if(this.search.length == 0)
      this.router.navigate(["/characters"])
    else
      this.router.navigate(["/characters", "search"], { queryParams: { name: this.search } })
    
  }
  
}
