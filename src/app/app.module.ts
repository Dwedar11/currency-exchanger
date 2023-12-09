import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopularCurrenciesComponent } from './popular-currencies/popular-currencies.component';
import { DetailsComponent } from './details/details.component';
import { HeaderComponent } from './header/header.component';
import { ConverterPanelComponent } from './converter-panel/converter-panel.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule}from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PopularCurrenciesComponent,
    DetailsComponent,
    HeaderComponent,
    ConverterPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
