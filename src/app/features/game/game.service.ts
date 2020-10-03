import { Injectable } from '@angular/core';
import { IGameData } from '../../common/interfaces/game-data.interface';
import { StorageManager } from '../../common/util/storage.manager';
import { Constants } from '../../common/util/constants';
import { GameDataConfig } from '../../common/configs/game-data.config';
import { ITimeMachine } from '../../common/interfaces/time-machine.interface';
import { AgesKeyEnum } from '../../common/enums/ages-key.enum';
import { IAge } from '../../common/interfaces/age.interface';
import { AgesConfig } from '../../common/configs/ages.config';
import { TimeMachinesConfig } from '../../common/configs/time-machines.config';

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
    // TODO: If I have time, don't hardcode the amount.
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
   * Returns the next age that we should be progressing through.
   * @param currentAge The current age that we are in.
   * @param ages The array of all possible ages.
   */
  public getNextAge(currentAge: AgesKeyEnum, ages: IAge[]): IAge {
    const currentIndex = ages.findIndex((a) => a.key === currentAge);
    if (currentIndex >= 0 && currentIndex !== ages.length - 1) {
      return Object.assign({}, ages[currentIndex + 1]);
    } else {
      // Otherwise always return STONE_AGE (which should always be index 0)
      return Object.assign({}, ages[0]);
    }
  }

  /**
   * Given the current gameData state, will reset and set all values accordingly to the new age config.
   * @param gameData The current game data configuration.
   */
  public setGameDataValuesBasedOnNewAge(gameData: IGameData): IGameData {
    const currentAge = this.getAgeByKey(gameData.currentAge, gameData.ages);
    // Set all the values that we want to add based on the current age.
    gameData.currentBaseClickRate += currentAge.baseClickRate;
    gameData.currentClickRateMultiplier += currentAge.clickRateMultiplier;

    // Add everything to base multipliers for configuration on timeMachines
    gameData.timeMachines.forEach((tm) => {
      // When we enter a new age, you must re-purchase all of your time machines, but you
      // will have the added bonus of the higher multiplier.
      tm.owned = 0;
      tm.generateMultiplier += currentAge.timeMachineBaseGenerateMultiplier;
    });

    // Remove Dark Matter Collectors
    gameData.darkMatterCollectorOwned = 0;

    // Lastly, reset all current currencies back to zero. (Except Paradox Tokens)
    gameData.currentTimeParticles = 0;
    gameData.currentDarkMatter = 0;
    gameData.currentClickCount = 0;

    return Object.assign({}, gameData);
  }

  /**
   * If returns TRUE, it means that we can allow the time traveler to jump to the next age in the time line.
   * @param currentAgeKey The age we are currently in.
   * @param ages An array of all possibles ages.
   * @param lifetimeTimeParticles The current lifetime time particles.
   * @param currentParadoxTokens The current number of paradox tokens (to determine how many loops we have been on)
   */
  public canAdvanceToNextAge(
    currentAgeKey: AgesKeyEnum,
    ages: IAge[],
    lifetimeTimeParticles: number,
    currentParadoxTokens: number
  ): boolean {
    const currentAgeIndex = ages.findIndex((a) => a.key === currentAgeKey);
    // Make sure its not the last one--because if so it means  we can LOOP which is handled in a separate method.
    if (currentAgeIndex >= 0 && currentAgeIndex !== ages.length - 1) {
      const nextAgeIndex = currentAgeIndex + 1;
      if (
        lifetimeTimeParticles >=
        (currentParadoxTokens
          ? ages[nextAgeIndex].unlockedAt
          : (currentParadoxTokens + 1) * ages[nextAgeIndex].unlockedAt)
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  /**
   * When returns TRUE, it means that the time traveler can loop back to the beginning of the timeline and obtain a new Paradox Token!
   * @param currentAgeKey The age that the time traveler is currently in.
   * @param ages A list of all possibles ages.
   * @param ownedParadoxTokens The current amount of paradox tokens that are owned.
   * @param paradoxTokenBaseCost The base cost of a paradox token.
   * @param paradoxTokenCostMultiplier The multiplier for buying a paradox token.
   * @param lifetimeTimeParticles The current lifetime time particles.
   */
  public canLoop(
    currentAgeKey: AgesKeyEnum,
    ages: IAge[],
    ownedParadoxTokens: number,
    paradoxTokenBaseCost: number,
    paradoxTokenCostMultiplier: number,
    lifetimeTimeParticles: number
  ): boolean {
    if (
      ages[ages.length - 1].key === currentAgeKey &&
      lifetimeTimeParticles >=
        (ownedParadoxTokens
          ? ownedParadoxTokens *
            paradoxTokenBaseCost *
            paradoxTokenCostMultiplier
          : paradoxTokenBaseCost)
    ) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Loops the time traveler back to the beginning of the timeline but awards them with a new paradox token.
   * @param gameData The current game data configuration.
   */
  public loop(gameData: IGameData): IGameData {
    // First we want to set everything back to original values except paradox tokens.
    gameData.currentAge = AgesKeyEnum.STONE_AGE;
    gameData.currentClickCount = 0;
    gameData.prestigeClickCount = 0;
    gameData.currentDarkMatter = 0;
    gameData.prestigeDarkMatter = 0;
    gameData.currentTimeParticles = 0;
    gameData.prestigeTimeParticles = 0;
    gameData.currentBaseClickRate = 1.0;
    gameData.currentClickRateMultiplier = 1.0;
    gameData.darkMatterCollectorOwned = 0;
    gameData.ages = AgesConfig.getDefault();
    gameData.timeMachines = TimeMachinesConfig.getDefault();

    // Give a paradox token
    gameData.currentParadoxTokens++;

    return Object.assign({}, gameData);
  }

  /**
   * Given an array of messages, will randomly choose one from the list to return.
   * @param messages The array of possible choices.
   */
  public getRandomMessageFromArray(messages: string[]): string {
    const index = Math.floor(Math.random() * messages.length);
    return messages[index];
  }
}
