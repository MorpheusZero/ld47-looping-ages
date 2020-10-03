import { IAge } from '../interfaces/age.interface';
import { AgesKeyEnum } from '../enums/ages-key.enum';

/**
 * Handles generating new defaults for new time travelers.
 */
export class AgesConfig {
  /**
   * Returns the default ages configuration for the game.
   */
  public static getDefault(): IAge[] {
    return [
      {
        key: AgesKeyEnum.STONE_AGE,
        name: 'The Stone Age',
        description: 'An age that has stone in it...',
        baseClickRate: 1.0,
        clickRateMultiplier: 0.01,
        timeMachineBaseGenerateMultiplier: 0.01,
        locked: true,
        messages: [
          'In the stone age it seems that people are using stones for things...',
          'A stone can also be food if you are hungry enough.',
        ],
      },
      {
        key: AgesKeyEnum.MIDDLE_AGES,
        name: 'The Middle Ages',
        description: 'This age is directly in the middle of the other ages...',
        baseClickRate: 3.0,
        clickRateMultiplier: 0.03,
        timeMachineBaseGenerateMultiplier: 0.03,
        locked: false,
        messages: [
          'I was in the middle, and then I was there...',
          'The middle ages has black death plague.',
        ],
      },
      {
        key: AgesKeyEnum.EARLY_MODERN_AGE,
        name: 'The Early Modern Age',
        description: 'The earliest of the modern ages...',
        baseClickRate: 8.0,
        clickRateMultiplier: 0.08,
        timeMachineBaseGenerateMultiplier: 0.08,
        locked: false,
        messages: [
          'The early modern age message 1!',
          'The early modern age message 2!',
        ],
      },
      {
        key: AgesKeyEnum.LATE_MODERN_AGE,
        name: 'The Late Modern Age',
        description: 'Not actually the latest of the modern ages...',
        baseClickRate: 20.0,
        clickRateMultiplier: 0.2,
        timeMachineBaseGenerateMultiplier: 0.2,
        locked: false,
        messages: ['REVOLUTIONARY WAR!!!!', 'CIVIL WAR!!!'],
      },
      {
        key: AgesKeyEnum.CONTEMPORARY_AGE,
        name: 'The Contemporary Age',
        description:
          'Ahhh modern history that we actually have lived through...',
        baseClickRate: 50.0,
        clickRateMultiplier: 0.5,
        timeMachineBaseGenerateMultiplier: 0.5,
        locked: false,
        messages: ['REVOLUTIONARY WAR!!!!', 'CIVIL WAR!!!'],
      },
    ];
  }
}
