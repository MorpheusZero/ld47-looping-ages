import { Component, OnInit } from '@angular/core';
import { IGameData } from '../../common/interfaces/game-data.interface';
import { AppGameService } from '../game/game.service';
import { AlertManager } from '../../common/util/alert.manager';
import { CssHelper } from '../../common/util/css-helper';
import { GameDataConfig } from '../../common/configs/game-data.config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.template.html',
  styleUrls: ['./new-game.scss'],
})
export class AppNewGameComponent implements OnInit {
  /**
   * A reference to the saved game data.
   */
  public gameData: IGameData;

  /**
   * Name of our new time traveler.
   */
  public newName: string;

  /**
   * If TRUE, it means that a save game already exists.
   */
  public dataExists: boolean;

  /**
   * Whether or not we are finished with the splash.
   */
  public splashFinished: boolean;

  constructor(private gameService: AppGameService, private router: Router) {
    this.gameData = null;
    this.splashFinished = false;
    this.dataExists = false;
    this.newName = '';
  }

  /**
   * Loaded initially when the component loads.
   */
  public ngOnInit(): void {
    this.gameData = this.gameService.loadGameData();
    this.setupIntro();
  }

  /**
   * Start the game by routing back to the root game page.
   */
  public start(): void {
    this.dataExists = false;
    this.gameData = GameDataConfig.getDefault();
    this.gameData.name = this.newName;
    this.gameService.saveGameData(this.gameData);
    this.router.navigate(['']);
  }

  private setupIntro(): void {
    const element = document.getElementById('intro');
    CssHelper.fadeIn(element, 2500);
    setTimeout(() => {
      CssHelper.fadeOut(element, 1000);
      const container = document.getElementById('intro-container');
      CssHelper.fadeOut(container, 1500);
      setTimeout(() => {
        this.splashFinished = true;
        this.determineGameState();
      }, 1000);
    }, 2500);
  }

  /**
   * Just lets players know that they might be overwriting save data if they come here.
   * @private
   */
  private determineGameState(): void {
    if (this.gameData.name) {
      this.dataExists = true;
      AlertManager.warning(
        'Game Already Exists!',
        `Saved data already exists for [${this.gameData.name}]. If you continue from this screen, your old data will be overwritten. If you do not want to overwrite your save game data, then please go back to the main page!`
      );
    }
  }
}
