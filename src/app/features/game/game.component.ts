import { Component, OnDestroy, OnInit } from '@angular/core';
import { IGameData } from '../../common/interfaces/game-data.interface';
import { AppGameService } from './game.service';
import { ITimeMachine } from '../../common/interfaces/time-machine.interface';

@Component({
  selector: 'app-game',
  templateUrl: './game.template.html',
  styleUrls: ['./game.scss'],
})
export class AppGameComponent implements OnInit, OnDestroy {
  /**
   * A reference to the saved game data.
   */
  public gameData: IGameData;

  /**
   * A reference to the game loop interval so we can clear it out on destroy.
   */
  public intervalRef: any;

  /**
   * Whether or not the game is loading.
   */
  public isLoading: boolean;

  constructor(private gameService: AppGameService) {
    this.gameData = null;
    this.isLoading = false;
  }

  /**
   * Loaded initially when the component loads.
   */
  public ngOnInit(): void {
    this.isLoading = true;
    this.gameData = this.gameService.loadGameData();
    this.intervalRef = this.initializeGameLoop();
    this.isLoading = false;
  }

  /**
   * Runs when the component is being unloaded.
   */
  public ngOnDestroy(): void {
    if (this.intervalRef) {
      window.clearInterval(this.intervalRef);
    }
  }

  /**
   * Handles clicker earnings.
   * @param earnings The earnings we get from the clicker component.
   */
  public addClickerEarnings(earnings: number): void {
    this.gameData.currentClickCount++;
    this.gameData.prestigeClickCount++;
    this.gameData.lifetimeClickCount++;
    this.gameData.currentDarkMatter += earnings;
    this.gameData.prestigeDarkMatter += earnings;
    this.gameData.lifetimeDarkMatter += earnings;
  }

  /**
   * Starts the per second game loop.
   */
  public initializeGameLoop(): any {
    return setInterval(() => {
      const timeParticles = this.gameService.calculatePerSecondEarnings(
        this.gameData.timeMachines,
        this.gameData.currentParadoxTokens,
        this.gameData.paradoxTokenBonus
      );
      this.gameData.currentTimeParticles += timeParticles;
      this.gameData.prestigeTimeParticles += timeParticles;
      this.gameData.lifetimeTimeParticles += timeParticles;
    }, 1000);
  }

  public updateTimeMachines(timeMachines: ITimeMachine[]): void {
    this.gameData.timeMachines = Object.assign([], timeMachines);
  }
}
