import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppGameComponent } from './game.component';

@NgModule({
  declarations: [AppGameComponent],
  imports: [CommonModule],
  exports: [AppGameComponent],
})
export class AppGameModule {}
