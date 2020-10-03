import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppGameComponent } from './features/game/game.component';
import { AppNewGameComponent } from './features/new-game/new-game.component';

const routes: Routes = [
  { path: '', component: AppGameComponent },
  {
    path: 'new',
    component: AppNewGameComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
