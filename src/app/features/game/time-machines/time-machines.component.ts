import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppGameService } from '../game.service';
import { ITimeMachine } from '../../../common/interfaces/time-machine.interface';
import { TimeMachineKeyEnum } from '../../../common/enums/time-machine-key.enum';

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

  @Output()
  public timeMachinesUpdated: EventEmitter<ITimeMachine[]>;

  constructor(private gameService: AppGameService) {
    this.timeMachines = [];
    this.timeMachinesUpdated = new EventEmitter<ITimeMachine[]>();
  }

  public buyTimeMachine(key: TimeMachineKeyEnum): void {
    const timeMachineIndex = this.timeMachines.findIndex(
      (tm) => tm.key === key
    );
    if (timeMachineIndex >= 0) {
      this.timeMachines[timeMachineIndex].owned++;
      // TODO: This needs to cost dark matter
      this.timeMachinesUpdated.emit(this.timeMachines);
    }
  }
}
