import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DeveloperGuidesModule } from './developerGuides/developer-guides.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, DeveloperGuidesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
