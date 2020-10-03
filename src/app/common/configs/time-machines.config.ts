import { ITimeMachine } from '../interfaces/time-machine.interface';
import { TimeMachineKeyEnum } from '../enums/time-machine-key.enum';

/**
 * Handles generating new defaults for new time travelers.
 */
export class TimeMachinesConfig {
  /**
   * Returns the default time machines configuration for the game.
   */
  public static getDefault(): ITimeMachine[] {
    return [
      {
        key: TimeMachineKeyEnum.STOPWATCH,
        name: 'Stopwatch',
        description: 'A magical time traveling watch!',
        unlockedAtLifeTimeDarkMatter: 5.0,
        locked: true,
        owned: 1,
        baseCostDarkMatter: 10.0,
        costMultiplier: 1.025,
        baseGenerateTimeParticles: 1.0,
        generateMultiplier: 1.0,
        messages: [
          `I'm unsure if a stopwatch is really helpful in this situation...`,
        ],
      },
      {
        key: TimeMachineKeyEnum.SMART_PHONE,
        name: 'Smartphone',
        description:
          'A super duper droid phone with time traveling properties.',
        unlockedAtLifeTimeDarkMatter: 50.0,
        locked: true,
        owned: 0,
        baseCostDarkMatter: 50.0,
        costMultiplier: 1.025,
        baseGenerateTimeParticles: 1.0,
        generateMultiplier: 5.0,
        messages: [
          `I'm unsure if a stopwatch is really helpful in this situation...`,
        ],
      },
    ];
  }
}
