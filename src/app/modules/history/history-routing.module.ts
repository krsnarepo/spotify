import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritePageComponent } from '@modules/favorites/pages/favorite-page/favorite-page.component';

const routes: Routes = [
  {
    path:"favorites",
    component:FavoritePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryRoutingModule { }
