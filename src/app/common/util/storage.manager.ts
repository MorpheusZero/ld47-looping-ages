import { IGameData } from '../interfaces/game-data.interface';
import { Compression } from './compression';

/**
 * Manages the data that we store in the browser.
 */
export class StorageManager {
  /**
   * The storage key for where our save data is stored.
   * @private
   */
  private static readonly SAVED_GAME_DATA_KEY = 'la_data_x';

  /**
   * Given a game data object, will compress it and store it in localStorage.
   * @param gameData The current game data object that we want to save.
   */
  public static saveGameData(gameData: IGameData): void {
    const stringified = JSON.stringify(gameData);
    const encoded = Compression.compress(stringified);
    localStorage.setItem(StorageManager.SAVED_GAME_DATA_KEY, encoded);
  }

  /**
   * Retrieve game data from localStorage if it exists.
   */
  public static getSavedGameData(): IGameData {
    const encoded = localStorage.getItem(StorageManager.SAVED_GAME_DATA_KEY);
    if (encoded) {
      const stringified = Compression.decompress(encoded);
      return JSON.parse(stringified);
    } else {
      return null;
    }
  }
}
