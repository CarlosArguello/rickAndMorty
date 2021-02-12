import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';

import { CharactersModule } from "@app/modules/characters/characters.module"

import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CharactersModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
