import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppGameComponent } from './features/game/game.component';
import { AppPlaceholderComponent } from './features/placeholder/placeholder.component';

const routes: Routes = [
  { path: '', component: AppPlaceholderComponent },
  {
    path: 'game',
    component: AppGameComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
