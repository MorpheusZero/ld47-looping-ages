import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppPlaceholderModule } from './features/placeholder/placeholder.module';
import { AppGameModule } from './features/game/game.module';
import { AppNewGameModule } from './features/new-game/new-game.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AppPlaceholderModule,
    AppGameModule,
    AppNewGameModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
