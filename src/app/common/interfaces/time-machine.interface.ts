import { TimeMachineKeyEnum } from '../enums/time-machine-key.enum';

/**
 * Represents a time machine that can be purchased via various items that helps generate
 * time particles that allows the player to travel through various ages in time.
 */
export interface ITimeMachine {
  /**
   * A unique identifier for a time machine.
   */
  key: TimeMachineKeyEnum;

  /**
   * A friendly name to display in the UI for the time machine.
   */
  name: string;

  /**
   * A short description to accompany the name.
   */
  description: string;

  /**
   * When lifetime dark matter reaches this number, this time machine item will be available for purchase (if you can afford it.)
   */
  unlockedAtLifeTimeDarkMatter: number;

  /**
   * If TRUE, this item will be hidden and unavailable for purchase.
   */
  locked: boolean;

  /**
   * How many of this item the player currently owns.
   */
  owned: number;

  /**
   * The base cost in DarkMatter to purchase another one of these items.
   */
  baseCostDarkMatter: number;

  /**
   * Affects how much the base cost goes up when you purchase multiple items.
   */
  costMultiplier: number;

  /**
   * Possible funny messages that might popup when you buy one of these.
   */
  messages: string[];

  /**
   * The base amount of TimeParticles that get generated per second for each item owned.
   */
  baseGenerateTimeParticles: number;

  /**
   * Affects how much the base generation of TimeParticles per second for each item owned goes up when multiple are owned.
   */
  generateMultiplier: number;
}
