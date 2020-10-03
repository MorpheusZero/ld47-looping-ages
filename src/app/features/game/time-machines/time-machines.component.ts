import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppGameService } from '../game.service';
import { ITimeMachine } from '../../../common/interfaces/time-machine.interface';
import { TimeMachineKeyEnum } from '../../../common/enums/time-machine-key.enum';
import { Constants } from '../../../common/util/constants';

@Component({
  selector: 'app-time-machines',
  templateUrl: './time-machines.template.html',
  styleUrls: ['./time-machines.scss'],
})
export class AppTimeMachinesComponent {
  /**
   * The time machines configuration for the time traveler.
   */
  @Input()
  public timeMachines: ITimeMachine[];

  /**
   * How much dark matter we currently have available.
   */
  @Input()
  public darkMatterCount: number;

  /**
   * Outputs changes to the parent component.
   */
  @Output()
  public timeMachinesUpdated: EventEmitter<{
    timeMachines: ITimeMachine[];
    darkMatterSpent: number;
  }>;

  constructor(private gameService: AppGameService) {
    this.timeMachines = [];
    this.timeMachinesUpdated = new EventEmitter<{
      timeMachines: ITimeMachine[];
      darkMatterSpent: number;
    }>();
  }

  /**
   * Purchase a new time machine and do the math on dark matter spent.
   * @param key The Key for the Time Machine we want to buy.
   */
  public buyTimeMachine(key: TimeMachineKeyEnum): void {
    const timeMachineIndex = this.timeMachines.findIndex(
      (tm) => tm.key === key
    );
    if (timeMachineIndex >= 0) {
      const cost =
        this.timeMachines[timeMachineIndex].owned > 0
          ? this.timeMachines[timeMachineIndex].baseCostDarkMatter *
            this.timeMachines[timeMachineIndex].costMultiplier *
            this.timeMachines[timeMachineIndex].owned
          : this.timeMachines[timeMachineIndex].baseCostDarkMatter;
      if (this.darkMatterCount >= cost) {
        this.timeMachines[timeMachineIndex].owned++;
        this.darkMatterCount -= cost;
        this.timeMachinesUpdated.emit({
          timeMachines: this.timeMachines,
          darkMatterSpent: cost,
        });
      }
    }
  }

  /**
   * Get how much the time machine should cost to purchase a new one.
   * @param tm A reference to the actual time machine.
   */
  public getCostOfTimeMachine(tm: ITimeMachine): number {
    return parseFloat(
      (tm.owned > 0
        ? tm.baseCostDarkMatter * tm.costMultiplier * tm.owned
        : tm.baseCostDarkMatter
      ).toFixed(Constants.DECIMAL_PLACES)
    );
  }
}
