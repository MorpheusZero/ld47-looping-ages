import { AgesKeyEnum } from '../enums/ages-key.enum';

/**
 * Represents an age that the player can travel to and the perks it gives.
 */
export interface IAge {
  /**
   * A unique identifier for an age.
   */
  key: AgesKeyEnum;

  /**
   * A friendly name to display in the UI for the age.
   */
  name: string;

  /**
   * A short description to accompany the name.
   */
  description: string;

  /**
   * The base click rate to add to the player's current base click rate.
   */
  baseClickRate: number;

  /**
   * The multiplier to add to the player's current click rate multiplier.
   */
  clickRateMultiplier: number;

  /**
   * The multiplier to add to add to the players time machine generate multiplier.
   */
  timeMachineBaseGenerateMultiplier: number;

  /**
   * If locked is TRUE, it means when we attempt to time travel we can't go here again unless we LOOP first to reset.
   */
  locked: boolean;

  /**
   * Some simple funny and maybe some real historical facts from the actual time period that show up sometimes in the UI.
   */
  messages: string[];
}
