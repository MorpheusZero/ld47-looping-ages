import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppGameComponent } from './game.component';
import { AppClickerComponent } from './clicker/clicker.component';
import { AppTimeMachinesComponent } from './time-machines/time-machines.component';

@NgModule({
  declarations: [
    AppGameComponent,
    AppClickerComponent,
    AppTimeMachinesComponent,
  ],
  imports: [CommonModule],
  exports: [AppGameComponent, AppClickerComponent, AppTimeMachinesComponent],
})
export class AppGameModule {}
