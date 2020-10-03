import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppPlaceholderModule } from './features/placeholder/placeholder.module';
import { AppGameModule } from './features/game/game.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppPlaceholderModule,
    AppGameModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
