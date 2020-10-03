import { ITimeMachine } from './time-machine.interface';
import { IAge } from './age.interface';
import { AgesKeyEnum } from '../enums/ages-key.enum';

/**
 * Represents the entire data model for the game.
 */
export interface IGameData {
  /**
   * The time traveler's name that is playing the game.
   */
  name: string;

  /**
   * When this game was started (so when you beat it we can tell you how long it took you)
   */
  startTime: Date;

  /**
   * The current base click rate to gain dark matter.
   */
  currentBaseClickRate: number;

  /**
   * How much to multiply the base click rate by when calculating totals.
   */
  currentClickRateMultiplier: number;

  /**
   * How many times we have clicked during the current age.
   */
  currentClickCount: number;

  /**
   * How many times we have clicked during the current prestige.
   */
  prestigeClickCount: number;

  /**
   * How many times we have clicked total during the entire game.
   */
  lifetimeClickCount: number;

  /**
   * How much dark matter the time traveler currently has.
   */
  currentDarkMatter: number;

  /**
   * How much dark matter the time traveler has earned during the current age.
   */
  prestigeDarkMatter: number;

  /**
   * How much dark matter the time traveler has earned during the entire game.
   */
  lifetimeDarkMatter: number;

  /**
   * How much time particles the time traveler currently has.
   */
  currentTimeParticles: number;

  /**
   * How much time particles the time traveler has earned during the current age.
   */
  prestigeTimeParticles: number;

  /**
   * How much time particles the time traveler has earned during the entire game.
   */
  lifetimeTimeParticles: number;

  /**
   * How many times the player has looped and earned a token.
   */
  currentParadoxTokens: number;

  /**
   * The base cost for one token (cost in lifetime time particles)
   */
  paradoxTokenBaseCost: number;

  /**
   * How many time particles per owned token it will cost to buy the next one by Looping.
   */
  paradoxTokenMultiplier: number;

  /**
   * A percentage bonus multiplier to add to the overall per second earnings.
   */
  paradoxTokenBonus: number;

  /**
   * How many paradox tokens you need to fix the time continuum.
   */
  fixTimeContinuumCostInTokens: number;

  /**
   * Some story related messages to share when the player loops and receives a new paradox token.
   */
  loopMessages: string[];

  /**
   * The time machines that are configured for the time travelers game.
   */
  timeMachines: ITimeMachine[];

  /**
   * A way to keep track of which age is currently active for the UI.
   */
  currentAge: AgesKeyEnum;

  /**
   * The ages that are configured for the time travelers game.
   */
  ages: IAge[];
}
