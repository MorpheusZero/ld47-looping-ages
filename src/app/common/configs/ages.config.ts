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
        description:
          'The Stone Age was a broad prehistoric period during which stone was widely used to make tools with an edge, a point, or a percussion surface. The period lasted for roughly 3.4 million years, and ended between 8700 BCE and 2000 BCE , with the advent of metalworking.',
        baseClickRate: 1.0,
        clickRateMultiplier: 0.01,
        timeMachineBaseGenerateMultiplier: 0.01,
        unlockedAt: 0,
        messages: [
          'In the stone age it seems that people are using stones for things...',
          'A stone can also be food if you are hungry enough.',
          'In the early Stone Age, humans lived in caves! I ran into a cave for shelter and was shooed out by the primitives!',
          'Fun Fact: Dogs became domesticated during the Stone Age!',
          'One of the primitives gave me a necklace made of animal teeth--Im pretty sure Im married now.',
        ],
      },
      {
        key: AgesKeyEnum.MIDDLE_AGES,
        name: 'The Middle Ages',
        description:
          'The Middle Ages lasted from the 5th to the 15th century. It began with the fall of the Western Roman Empire and merged into the Renaissance and the Age of Discovery.',
        baseClickRate: 3.0,
        clickRateMultiplier: 0.03,
        timeMachineBaseGenerateMultiplier: 0.03,
        unlockedAt: 1000,
        messages: [
          'So what is it called when Im in the middle of the Middle Ages?',
          'Contrary to popular belief and media, the church did not conduct wide spread witch hunts during the Middle Ages--this came much later during the early Modern Era.',
          'People in the Middle Ages sure do wear some ridiculous shoes!',
          'While traveling through France in 1457, I witnessed a sow, that was charged with murder, found guilty and hanged for his crimes.',
          'The Black Death was the deadliest pandemic recorded in human history--I hope I make it out of here before I contract the disease!',
        ],
      },
      {
        key: AgesKeyEnum.EARLY_MODERN_AGE,
        name: 'The Early Modern Age',
        description:
          'The Early Modern Age of history is usually seen to span from the start of the 15th century, through the Age of Enlightenment in the 17th and 18th centuries, until the beginning of the Industrial Revolution in the late 18th century.',
        baseClickRate: 9.0,
        clickRateMultiplier: 0.08,
        timeMachineBaseGenerateMultiplier: 0.08,
        unlockedAt: 5000,
        messages: [
          'The Age of Discovery has begun! Europe is expanding to the New World, trade with Asia is becoming more common, and European travel to Africa is beginning!',
          'The Thirty Years War in Central Europe decimated the population by up to 20%!',
          'The fall of the Spanish Armada enabled the Rise of the British Empire during these times.',
          'I managed to get a signed copy of the 95 Theses: Reformation by Martin Luther!',
        ],
      },
      {
        key: AgesKeyEnum.LATE_MODERN_AGE,
        name: 'The Late Modern Age',
        description:
          'The Late Modern Age began approximately in the mid-18th century and depending on the author either ended with the beginning of contemporary history after World War II, or includes that period up to the present day.',
        baseClickRate: 20.0,
        clickRateMultiplier: 0.2,
        timeMachineBaseGenerateMultiplier: 0.2,
        unlockedAt: 20000,
        messages: [
          'The Opium Wars are beginning in China.',
          'I was able to make it to Abraham Lincolns Gettysburg Address. The American Civil war ended with the abolition of slavery.',
          'World War I began in 1914 with the fall of the Ottoman Empire.',
          'During World War II, on August 6th, 1945 the Enola Gay dropped an atomic bomb on Hiroshima killing 80,000 people. A sad day in history.',
        ],
      },
      {
        key: AgesKeyEnum.CONTEMPORARY_AGE,
        name: 'The Contemporary Age',
        description:
          'The Contemporary Age is a subset of modern history that describes the historical period from approximately 1945 to the present.',
        baseClickRate: 60.0,
        clickRateMultiplier: 0.5,
        timeMachineBaseGenerateMultiplier: 0.5,
        unlockedAt: 85000,
        messages: [
          'The US War on Terrorism started after the September 11th attacks.',
          'At the end of the 20th century, the world was at a major crossroads. Throughout the century, more technological advances had been made than in all of preceding history.',
          'On 6 August 2012, the Mars Science Laboratory Curiosity, the most elaborate Martian exploration vehicle to date, landed on Mars',
          'Another major technological advancement came in 2012 when European physicists statistically demonstrated the existence of the Higgs boson particle.',
        ],
      },
    ];
  }
}
