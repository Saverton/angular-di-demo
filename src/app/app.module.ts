import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountAModule } from './count-a/count-a.module';
import { CountBModule } from './count-b/count-b.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    CountAModule, 
    CountBModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
