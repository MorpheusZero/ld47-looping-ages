/**
 * Returns the time difference in how many hours.
 */
export class DateHelper {
  public static diffHours(dt2: Date, dt1: Date): number {
    let diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= 60 * 60;
    return Math.abs(Math.round(diff));
  }
}
