import { Component, OnDestroy, OnInit } from '@angular/core';
import { IGameData } from '../../common/interfaces/game-data.interface';
import { AppGameService } from './game.service';
import { ITimeMachine } from '../../common/interfaces/time-machine.interface';
import { AlertManager } from '../../common/util/alert.manager';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { CssHelper } from '../../common/util/css-helper';
import { StorageManager } from '../../common/util/storage.manager';

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
   * A reference to the news message interval (30s)
   */
  public messageRef: any;

  /**
   * The amount of Dark Matter we are currently collecting per second.
   */
  public DMpS: number;

  /**
   * The amount of Time Particles we are currently collecting per second.
   */
  public TPpS: number;

  /**
   * The news message we want to display when we trigger the event.
   */
  public newsMessage: string;

  constructor(private gameService: AppGameService, private router: Router) {
    this.gameData = null;
    this.DMpS = 0;
    this.TPpS = 0;
    this.newsMessage =
      'TEST MESSAGE FOR PLACEMENT TEST MESSAGE FOR PLACEMENT TEST MESSAGE FOR PLACEMENT TEST MESSAGE FOR PLACEMENT';
  }

  /**
   * Loaded initially when the component loads.
   */
  public ngOnInit(): void {
    this.gameData = this.gameService.loadGameData();
    this.determineNewGameStatus();
    this.intervalRef = this.initializeGameLoop();
    this.messageRef = this.initializeNewsLoop();
  }

  /**
   * Runs when the component is being unloaded.
   */
  public ngOnDestroy(): void {
    if (this.intervalRef) {
      window.clearInterval(this.intervalRef);
    }
    if (this.messageRef) {
      window.clearInterval(this.messageRef);
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
      // Time Particles
      // ######################################
      const timeParticles = this.gameService.calculatePerSecondTimeParticleEarnings(
        this.gameData.timeMachines,
        this.gameData.currentParadoxTokens,
        this.gameData.paradoxTokenBonus
      );
      this.gameData.currentTimeParticles += timeParticles;
      this.gameData.prestigeTimeParticles += timeParticles;
      this.gameData.lifetimeTimeParticles += timeParticles;
      this.TPpS = timeParticles;

      // Dark Matter
      // ########################################
      const darkMatter = this.gameService.calculatePerSecondDarkMatterEarnings(
        this.gameData.darkMatterCollectorOwned,
        this.gameData.currentBaseClickRate,
        this.gameData.currentClickRateMultiplier
      );
      this.gameData.currentDarkMatter += darkMatter;
      this.gameData.prestigeDarkMatter += darkMatter;
      this.gameData.lifetimeDarkMatter += darkMatter;
      this.DMpS = darkMatter;

      // Check Time Machine Lock Status
      this.gameService.checkTimeMachineLockStatus(this.gameData);
    }, 1000);
  }

  /**
   * Starts the news looper.
   */
  public initializeNewsLoop(): any {
    return setInterval(() => {
      this.newsMessage = this.gameService.generateNextNewsMessage(
        this.gameData
      );
      const element = document.getElementById('newsMessage');
      CssHelper.fadeIn(element, 2500);
      setTimeout(() => {
        CssHelper.fadeOut(element, 2500);
        setTimeout(() => {
          this.newsMessage = '';
        }, 2600);
      }, 25000);
      // Additionally autosave the game here every 30 seconds
      this.gameService.saveGameData(this.gameData);
    }, 30000);
  }

  /**
   * Handles updating time machines when they are purchased.
   * @param timeMachinesData The data passed from the child component.
   */
  public updateTimeMachines(timeMachinesData: {
    timeMachines: ITimeMachine[];
    darkMatterSpent: number;
  }): void {
    this.gameData.currentDarkMatter -= timeMachinesData.darkMatterSpent;
    this.gameData.timeMachines = Object.assign(
      [],
      timeMachinesData.timeMachines
    );
  }

  /**
   * Handles updating the dark matter collectors when they are purchased.
   * @param collectorsData The data passed from the child component.
   */
  public updateCollectors(collectorsData: {
    collectorsOwned: number;
    timeParticlesSpent: number;
  }): void {
    this.gameData.darkMatterCollectorOwned = collectorsData.collectorsOwned;
    this.gameData.currentTimeParticles -= collectorsData.timeParticlesSpent;
  }

  /**
   * Determines whether or not we can advance to the next age!
   */
  public canAdvanceAge(): boolean {
    return this.gameService.canAdvanceToNextAge(
      this.gameData.currentAge,
      this.gameData.ages,
      this.gameData.lifetimeTimeParticles,
      this.gameData.currentParadoxTokens
    );
  }

  /**
   * Advance to the next age in the timeline!
   */
  public goToNextAge(): void {
    const nextAge = this.gameService.getNextAge(
      this.gameData.currentAge,
      this.gameData.ages
    );
    this.gameData.currentAge = nextAge.key;
    this.gameData = this.gameService.setGameDataValuesBasedOnNewAge(
      this.gameData
    );
    AlertManager.success(nextAge.name, nextAge.description);
  }

  /**
   * Returns whether or not we can loop back to the beginning of the time line.
   */
  public canLoop(): boolean {
    return this.gameService.canLoop(
      this.gameData.currentAge,
      this.gameData.ages,
      this.gameData.currentParadoxTokens,
      this.gameData.paradoxTokenBaseCost,
      this.gameData.paradoxTokenMultiplier,
      this.gameData.lifetimeTimeParticles
    );
  }

  /**
   * Loops back to the beginning of the timeline.
   */
  public loop(): void {
    AlertManager.question(
      `PARADOX TOKEN +1`,
      this.gameService.getRandomMessageFromArray(this.gameData.loopMessages)
    );
    this.gameData = this.gameService.loop(this.gameData);
  }

  /**
   * Whether or not we can fix the time continuum or if we are "Stuck in a loop :D"
   */
  public canFixTime(): boolean {
    if (
      this.gameData.currentParadoxTokens >=
      this.gameData.fixTimeContinuumCostInTokens
    ) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * You reached the end of the game! Congrats!
   */
  public async fixTime(): Promise<void> {
    const res = await AlertManager.success(
      `Time Continuum Fixed!`,
      this.gameService.getGameFinishedMessage(this.gameData)
    );
    StorageManager.deleteSaveGame();
    this.router.navigate(['new']);
  }

  /**
   * Get the name of the next age we will travel to.
   */
  public getNextAgeName(): string {
    return this.gameService.getNextAge(
      this.gameData.currentAge,
      this.gameData.ages
    ).name;
  }

  public getParticlesNeededForNextAge(): number {
    return this.gameService.getParticlesNeededToAdvanceAge(
      this.gameData.currentAge,
      this.gameData.ages,
      this.gameData.currentParadoxTokens,
      this.gameData.paradoxTokenBaseCost,
      this.gameData.paradoxTokenMultiplier
    );
  }

  /**
   * We need to determine if this should be treated as a new game or not.
   * The way we do that is by checking the saved game data if there is a name field present.
   * @private
   */
  private determineNewGameStatus(): void {
    // If this is a new game, we will re-route to the new-game page to set a name and setup the story.
    if (!this.gameData.name) {
      this.router.navigate(['new']);
    }
  }
}
