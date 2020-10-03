import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppNewGameComponent } from './new-game.component';

@NgModule({
  declarations: [AppNewGameComponent],
  imports: [CommonModule, FormsModule],
  exports: [AppNewGameComponent],
})
export class AppNewGameModule {}
