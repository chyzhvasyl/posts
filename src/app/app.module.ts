import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {Inter} from './components/secondtask/inter';
import { AppComponent } from './app.component';
import {ApiService} from './api.service';
import { SecondtaskComponent } from './components/secondtask/secondtask.component';


@NgModule({
  declarations: [
    AppComponent,
    SecondtaskComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, Inter
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
