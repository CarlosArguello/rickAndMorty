import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeCharacterComponent } from '@app/modules/characters/pages/homeCharacters/homeCharacters.component';
import { HomeSelectedCharacterComponent } from '@app/modules/characters/pages/homeSelectedCharacter/homeSelectedCharacters.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/characters'
  },
  {
    path: 'characters',
    component: HomeCharacterComponent
  },
  {
    path: 'character/:id',
    component: HomeSelectedCharacterComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
