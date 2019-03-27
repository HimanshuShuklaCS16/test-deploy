import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css']
})
export class FileUploaderComponent implements OnInit {

  constructor() { }
  afuConfig={
    uploadAPI:{
      url:"https://example-file-upload-api"
    }
    };
  ngOnInit() {
  }

}

