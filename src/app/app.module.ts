import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { NgModel } from '@angular/forms/src/directives/ng_model';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [HeroService],
    bootstrap: [AppComponent]
})
export class AppModule { }
