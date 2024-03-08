import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { ReversePipe } from './reverse.pipe';
import { SortPipe } from './sort.pipe';
import { NgOptimizedImage } from '@angular/common';
import { TurtleComponent } from './turtle/turtle.component';
import { HealthComponent } from './health/health.component';
import { HungerComponent } from './hunger/hunger.component';
import { HappinessComponent } from './happiness/happiness.component';
import { CurrencyComponent } from './currency/currency.component';
import { SkinsComponent } from './skins/skins.component'

@NgModule({
  declarations: [
    AppComponent,
    ReversePipe,
    SortPipe,
    TurtleComponent,
    HealthComponent,
    HungerComponent,
    HappinessComponent,
    CurrencyComponent,
    SkinsComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }