import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppGameService } from '../game.service';

@Component({
  selector: 'app-age-progress-bar',
  templateUrl: './age-progress-bar.template.html',
  styleUrls: ['./age-progress-bar.scss'],
})
export class AppAgeProgressBarComponent {
  /**
   * The current lifetime time particles.
   */
  @Input()
  public currentLifetimeTimeParticles: number;

  /**
   * How many particles we need to unlock the next age.
   */
  @Input()
  public particlesNeeded: number;

  /**
   * The name of the next age we can travel to.
   */
  @Input()
  public nextAgeName: string;

  constructor(private gameService: AppGameService) {
    this.currentLifetimeTimeParticles = 0;
    this.particlesNeeded = 0;
    this.nextAgeName = 'AGE';
  }

  /**
   * Returns a percentage number to display in the progress bar.
   */
  public getPercentage(): number {
    const per =
      (this.currentLifetimeTimeParticles / this.particlesNeeded) * 100;
    if (per <= 100) {
      return per;
    } else {
      return 100;
    }
  }
}
