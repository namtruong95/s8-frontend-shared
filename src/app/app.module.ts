import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';

import { TimePickerModule } from 'shared/time-picker/time-picker.module';

import { AppComponent } from './app.component';
import { PickerModule } from 'shared/picker/picker.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TimePickerModule,
    CommonModule,
    FormsModule,
    PickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
