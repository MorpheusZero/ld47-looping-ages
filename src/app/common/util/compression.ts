import LZString from 'lz-string';

/**
 * Handles string compression methods that we use for saving data.
 */
export class Compression {
  /**
   * Given a raw string, will compress it.
   * @param stringValue The string value that we want to compress.
   */
  public static compress(stringValue: string): string {
    return LZString.compress(stringValue);
  }

  /**
   * Given an encoded value, will decompress it back to the original string.
   * @param encodedValue The encoded value we want to decompress.
   */
  public static decompress(encodedValue: string): string {
    return LZString.decompress(encodedValue);
  }
}
