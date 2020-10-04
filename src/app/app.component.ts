import { Component } from '@angular/core';
import { AlertManager } from './common/util/alert.manager';

@Component({
  selector: 'app-root',
  templateUrl: './app.template.html',
  styleUrls: ['./app.scss'],
})
export class AppComponent {
  public showCredits(): void {
    AlertManager.info(
      'Thanks For Playing!',
      `LoopingAges was created by MorpheusZero for Ludum Dare 47. It is an idle/clicker/incremental web-based game about being stuck in a time loop while advancing through the various historical ages of time. The various technologies used were Angular 10 (Typescript), Docker & Google Cloud (deployment and hosting), and a few light-weight CSS frameworks such as Pure.CSS for helping handle some grid work and buttons. Everything else is primarily DOM elements and no game engine was used here. This was my first attempt at making any kind of game and participating in Ludum Dare, thanks for checking out my work!`
    );
  }
}
