import { IGameData } from '../interfaces/game-data.interface';
import { AgesKeyEnum } from '../enums/ages-key.enum';
import { TimeMachinesConfig } from './time-machines.config';
import { AgesConfig } from './ages.config';

/**
 * Defines the configuration for the entire game data object.
 */
export class GameDataConfig {
  /**
   * Returns the default game data object for a new time traveler.
   */
  public static getDefault(): IGameData {
    return {
      name: null,
      startTime: new Date(),
      currentBaseClickRate: 1.0,
      currentClickRateMultiplier: 1.0,
      currentClickCount: 0,
      prestigeClickCount: 0,
      lifetimeClickCount: 0,
      currentDarkMatter: 0,
      prestigeDarkMatter: 0,
      lifetimeDarkMatter: 0,
      currentTimeParticles: 0,
      prestigeTimeParticles: 0,
      lifetimeTimeParticles: 0,
      currentParadoxTokens: 0,
      paradoxTokenBaseCost: 5000.0,
      paradoxTokenMultiplier: 1.2,
      paradoxTokenBonus: 0.1,
      fixTimeContinuumCostInTokens: 3,
      currentAge: AgesKeyEnum.STONE_AGE,
      timeMachines: TimeMachinesConfig.getDefault(),
      ages: AgesConfig.getDefault(),
      loopMessages: ['NOT THIS AGAIN??!?!?', 'ANOTHER LOOP YAY!!!'],
    };
  }
}
