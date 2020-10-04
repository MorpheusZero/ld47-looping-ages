import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppGameComponent } from './game.component';
import { AppClickerComponent } from './clicker/clicker.component';
import { AppTimeMachinesComponent } from './time-machines/time-machines.component';
import { AppDarkMatterCollectorComponent } from './dark-matter-collector/dark-matter-collector.component';
import { AppAgeProgressBarComponent } from './age-progress-bar/age-progress-bar.component';

@NgModule({
  declarations: [
    AppGameComponent,
    AppClickerComponent,
    AppTimeMachinesComponent,
    AppDarkMatterCollectorComponent,
    AppAgeProgressBarComponent,
  ],
  imports: [CommonModule],
  exports: [
    AppGameComponent,
    AppClickerComponent,
    AppTimeMachinesComponent,
    AppDarkMatterCollectorComponent,
    AppAgeProgressBarComponent,
  ],
})
export class AppGameModule {}
