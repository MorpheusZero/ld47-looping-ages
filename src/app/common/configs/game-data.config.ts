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
      paradoxTokenBaseCost: 150000.0,
      paradoxTokenMultiplier: 1.2,
      paradoxTokenBonus: 0.1,
      fixTimeContinuumCostInTokens: 2,
      currentAge: AgesKeyEnum.STONE_AGE,
      darkMatterCollectorOwned: 0,
      darkMatterCollectorBaseCost: 50.0,
      darkMatterCollectorCostMultiplier: 1.25,
      timeMachines: TimeMachinesConfig.getDefault(),
      ages: AgesConfig.getDefault(),
      loopMessages: [
        `“People like us, who believe in physics, know that the distinction between past, present and future is only a stubbornly persistent illusion.” – Albert Einstein`,
        `“When we see the shadow on our images, are we seeing the time 11 minutes ago on Mars? Or are we seeing the time on Mars as observed from Earth now? It’s like time travel problems in science fiction. When is now; when was then?” – Bill Nye.`,
        `“Time is the most undefinable yet paradoxical of things; the past is gone, the future is not come, and the present becomes the past even while we attempt to define it, and, like the flash of lightning, at once exists and expires.” Charles Caleb Colton.`,
        `“Not only is the Universe stranger than we think, it is stranger than we can think.” ― Werner Heisenberg`,
        `“Physics is really nothing more than a search for ultimate simplicity, but so far all we have is a kind of elegant messiness.” ― Bill Bryson`,
        `“How wonderful that we have met with a paradox. Now we have some hope of making progress.” ― Niels Bohr`,
        `“Look up at the stars and not down at your feet. Try to make sense of what you see, and wonder about what makes the universe exist. Be curious.” – Stephen Hawking`,
        `“I love physics with all my heart. It is a kind of personal love, as one has for a person to whom one is grateful for many things.” – Lise Meitner`,
        `“The atoms may be compared to the letters of the alphabet, which can be put together into innumerable ways to form words. So the atoms are combined in equal variety to form what are called molecules.” – William Henry Bragg`,
        `“Going to the Moon is not a matter of Physics but of Economics.” – John Rader Platt (Physicist)`,
        `“What is the universe? The universe is a symphony of vibrating strings… We are nothing but melodies. We are nothing but cosmic music played out on vibrating strings and membranes.” – Michio Kaku`,
      ],
    };
  }
}
