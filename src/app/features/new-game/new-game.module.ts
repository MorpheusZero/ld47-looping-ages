import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppNewGameComponent } from './new-game.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppNewGameComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [AppNewGameComponent],
})
export class AppNewGameModule {}
