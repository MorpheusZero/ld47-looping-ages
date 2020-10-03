import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { AppGameService } from '../game.service';
import { Constants } from '../../../common/util/constants';

@Component({
  selector: 'app-dark-matter-collector',
  templateUrl: './dark-matter-collector.template.html',
  styleUrls: ['./dark-matter-collector.scss'],
})
export class AppDarkMatterCollectorComponent {
  /**
   * Current number of collectors owned.
   */
  @Input()
  public collectorsOwned: number;

  /**
   * Collectors base cost configuration.
   */
  @Input()
  public collectorsBaseCost: number;

  /**
   * Collectors base cost multiplier configuration.
   */
  @Input()
  public collectorsCostMultiplier: number;

  /**
   * How much time particles we currently have available.
   */
  @Input()
  public timeParticleCount: number;

  /**
   * Outputs changes to the parent component.
   */
  @Output()
  public collectorsUpdated: EventEmitter<{
    collectorsOwned: number;
    timeParticlesSpent: number;
  }>;

  constructor(private gameService: AppGameService) {
    this.collectorsOwned = 0;
    this.collectorsBaseCost = 0;
    this.collectorsCostMultiplier = 0;
    this.timeParticleCount = 0;
    this.collectorsUpdated = new EventEmitter<{
      collectorsOwned: number;
      timeParticlesSpent: number;
    }>();
  }

  /**
   * Buy a dark matter collector.
   * @param cost How much the dark matter collector costs (in time particles).
   */
  public buyDarkMatterCollector(cost: number): void {
    this.collectorsOwned++;
    this.timeParticleCount -= cost;
    this.collectorsUpdated.emit({
      collectorsOwned: this.collectorsOwned,
      timeParticlesSpent: cost,
    });
  }

  /**
   * How many time particles it costs to purchase a dark matter collector.
   */
  public getCost(): number {
    return parseFloat(
      (this.collectorsOwned
        ? this.collectorsOwned *
          this.collectorsBaseCost *
          this.collectorsCostMultiplier
        : this.collectorsBaseCost
      ).toFixed(Constants.DECIMAL_PLACES)
    );
  }
}
