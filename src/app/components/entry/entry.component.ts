import { Component } from '@angular/core';
import { User } from "../../shared/interfaces/userInterface"

@Component({
    selector: "entry-component",
    templateUrl: "./entry.component.html"
})
export class EntryComponent{
    title:string;
    age:number;
    user: User;

    constructor(){
        this.title = "new title"
        this.age = 17
        this.user = {
          id: 1,
          name: "carlos",
          lastName: "arguello",
          email: "carguello0210@gmail.com",
          password: "12345678"
        }
    }

    getAlert(msg:string):void{
      alert(msg)
    }
}
