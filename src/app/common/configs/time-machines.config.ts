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
        description: 'A magical time traveling watch from outer space!',
        unlockedAtLifeTimeDarkMatter: 10.0,
        locked: true,
        owned: 0,
        baseCostDarkMatter: 10.0,
        costMultiplier: 1.015,
        baseGenerateTimeParticles: 0.5,
        generateMultiplier: 1.0,
        messages: [
          `I'm unsure if a stopwatch is really helpful in this situation...`,
          `I think this stopwatch is broken?`,
          `My stopwatch seems to be generating some time particles...I think?`,
          `This stopwatch actually looks good on me.`,
        ],
      },
      {
        key: TimeMachineKeyEnum.SMART_PHONE,
        name: 'Smartphone',
        description:
          'A super duper droid phone with time traveling properties in the palm of your hand.',
        unlockedAtLifeTimeDarkMatter: 150.0,
        locked: true,
        owned: 0,
        baseCostDarkMatter: 50.0,
        costMultiplier: 1.015,
        baseGenerateTimeParticles: 2.5,
        generateMultiplier: 1.0,
        messages: [
          `I'm glad my smartphone is able to help me time travel--because I never leave home without it!`,
          `Luckily this time traveling smartphone is more reliable than those "fruit" phones.`,
          `Should I wait to charge my smartphone until its at low battery or always keep it charged in case of emergencies?`,
          `I'm really happy with my time traveling smartphones front facing camera so I can take selfies while I travel!`,
        ],
      },
      {
        key: TimeMachineKeyEnum.HOT_TUB,
        name: 'Hot Tub',
        description: 'A special hot tub that allows the passage of time!',
        unlockedAtLifeTimeDarkMatter: 800.0,
        locked: true,
        owned: 0,
        baseCostDarkMatter: 500.0,
        costMultiplier: 1.02,
        baseGenerateTimeParticles: 10.0,
        generateMultiplier: 1.0,
        messages: [
          `I guess I can get in the hot tub and soak for a little bit.`,
          `I wonder if shorts are required in the hot tub? Will it make time travel easier since there is less matter?`,
          `The bad thing about being in a hot tub by yourself is that you can't blame the bubbles on someone else...`,
          `If you turn the bubbles off, are you really just taking a bath in the hot tub?`,
        ],
      },
      {
        key: TimeMachineKeyEnum.DELOREAN,
        name: 'The DeLorean',
        description: 'A time traveling car built for speed!',
        unlockedAtLifeTimeDarkMatter: 5000.0,
        locked: true,
        owned: 0,
        baseCostDarkMatter: 2000.0,
        costMultiplier: 1.08,
        baseGenerateTimeParticles: 65.0,
        generateMultiplier: 1.0,
        messages: [
          `I don't know how to drive a stick shift!`,
          `Who puts a time machine inside of a car?`,
          `If I bring my playlist on my bluetooth device to the past, can I still use it in the car?`,
          `I wonder if I'm supposed to be changing the oil in this thing?`,
        ],
      },
      {
        key: TimeMachineKeyEnum.TARDIS,
        name: 'Tardis',
        description:
          'A time traveling device disguised to blend in with its surroundings!',
        unlockedAtLifeTimeDarkMatter: 10000.0,
        locked: true,
        owned: 0,
        baseCostDarkMatter: 5000.0,
        costMultiplier: 1.08,
        baseGenerateTimeParticles: 250.0,
        generateMultiplier: 1.0,
        messages: [
          `Wow! The Tardis is even bigger on the inside!`,
          `Yes, that makes sense--let's leave a police box in the middle of the wilderness! Perfect hiding place!`,
          `Ok let's just hold on tight and pretend it’s a plan!`,
          `There are lots of time particles coming from the Tardis!`,
        ],
      },
      {
        key: TimeMachineKeyEnum.TIME_INFINITY_STONE,
        name: 'Time Infinity Stone',
        description:
          'A powerful infinity stone that can control the flow of time and space.',
        unlockedAtLifeTimeDarkMatter: 550000.0,
        locked: true,
        owned: 0,
        baseCostDarkMatter: 12000.0,
        costMultiplier: 1.05,
        baseGenerateTimeParticles: 950.0,
        generateMultiplier: 1.0,
        messages: [
          `Nothing ever bad happened from using things you don't understand right?`,
          `I'm sure Mr. Strange won't mind if I borrow the Time Stone for awhile...`,
          `I wonder if in an alternative reality, I have already fixed the timeline? So I can't fail right?`,
          `I don't really understand the Time Continuum, but I do like green rocks.`,
        ],
      },
    ];
  }
}
