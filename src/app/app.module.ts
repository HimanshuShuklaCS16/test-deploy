import { AngularFileUploaderModule } from 'angular-file-uploader';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import {FileUploaderComponent} from './file-uploader/file-uploader.component';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
,FileUploaderComponent
  ],
  imports: [
    AngularFileUploaderModule
    ,BrowserModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
