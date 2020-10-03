import { Injectable } from '@angular/core';
import { IGameData } from '../../common/interfaces/game-data.interface';
import { StorageManager } from '../../common/util/storage.manager';
import { Constants } from '../../common/util/constants';
import { GameDataConfig } from '../../common/configs/game-data.config';
import { ITimeMachine } from '../../common/interfaces/time-machine.interface';
import { AgesKeyEnum } from '../../common/enums/ages-key.enum';
import { IAge } from '../../common/interfaces/age.interface';

@Injectable({
  providedIn: 'root',
})
export class AppGameService {
  constructor() {}

  /**
   * Saves the given game data object.
   * @param gameData The game data we want to save.
   */
  public saveGameData(gameData: IGameData): void {
    StorageManager.saveGameData(gameData);
  }

  /**
   * Loads any saved game data from localStorage.
   * If none is found, will load the default data.
   */
  public loadGameData(): IGameData {
    const savedData = StorageManager.getSavedGameData();
    if (savedData) {
      return savedData;
    } else {
      return GameDataConfig.getDefault();
    }
  }

  /**
   * Will calculate click earnings and then parse to the correct decimal places.
   * @param clickRate The base click rate amount.
   * @param clickMultiplier The multiplier for the clicker.
   */
  public calculateClickEarnings(
    clickRate: number,
    clickMultiplier: number
  ): number {
    const raw = clickRate * clickMultiplier;
    return parseFloat(raw.toFixed(Constants.DECIMAL_PLACES));
  }

  /**
   * Calculate time particle earnings per second based on the data passed in.
   * @param timeMachines The current configuration of time machines.
   * @param numParadoxTokens The current number of paradox tokens the time traveler has.
   * @param paradoxTokenBonus The config bonus amount per paradox token.
   */
  public calculatePerSecondTimeParticleEarnings(
    timeMachines: ITimeMachine[],
    numParadoxTokens: number,
    paradoxTokenBonus: number
  ): number {
    let earnings = 0;

    timeMachines.forEach((tm: ITimeMachine) => {
      if (tm.owned) {
        earnings +=
          tm.owned * tm.baseGenerateTimeParticles * tm.generateMultiplier;
      }
    });

    if (numParadoxTokens) {
      earnings += earnings * (1 + numParadoxTokens * paradoxTokenBonus);
    }

    return parseFloat(earnings.toFixed(Constants.DECIMAL_PLACES));
  }

  /**
   * Calculate dark matter earnings per second based on the data passed in.
   * @param collectors The amount of collectors owned.
   */
  public calculatePerSecondDarkMatterEarnings(collectors: number): number {
    // TODO: If i have time, don't hardcode the amount.
    const earnings = collectors * 5.0;
    return parseFloat(earnings.toFixed(Constants.DECIMAL_PLACES));
  }

  /**
   * Given a KEY, will return the associated the Age from the array.
   * @param key The key for the array we want to get.
   * @param ages An array of all the ages we have.
   */
  public getAgeByKey(key: AgesKeyEnum, ages: IAge[]): IAge {
    const age = ages.find((a) => a.key === key);
    return Object.assign({}, age);
  }

  /**
   * Given an array of messages, will randomly choose one from the list to return.
   * @param messages The array of possible choices.
   */
  public getRandomMessageFromArray(messages: string[]): string {
    const index = Math.floor(Math.random() * messages.length + 1);
    return messages[index];
  }
}
