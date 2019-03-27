import { AngularFileUploaderModule } from 'angular-file-uploader';
import { BrowserModule } from '@angular/platform-browser';
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
    ,BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
