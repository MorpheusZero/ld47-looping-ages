import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppGameService } from '../game.service';

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.template.html',
  styleUrls: ['./clicker.scss'],
})
export class AppClickerComponent {
  /**
   * The base click rate for the current time traveler.
   */
  @Input()
  public clickRate: number;

  /**
   * The click multiplier for the current time traveler.
   */
  @Input()
  public clickMultiplier: number;

  @Output()
  public clickerEarnings: EventEmitter<number>;

  constructor(private gameService: AppGameService) {
    this.clickRate = 0;
    this.clickMultiplier = 0;
    this.clickerEarnings = new EventEmitter<number>();
  }

  /**
   * The click event for the clicker button.
   */
  public click(): void {
    const earnings = this.gameService.calculateClickEarnings(
      this.clickRate,
      this.clickMultiplier
    );
    this.clickerEarnings.emit(earnings);
  }
}
