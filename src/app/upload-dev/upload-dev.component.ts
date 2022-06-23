import {Component, OnInit} from '@angular/core';
import {FileUploader, FileSelectDirective} from 'ng2-file-upload/ng2-file-upload';
import {FileService} from '../file.service';

const UploadURL = 'http://localhost:3000/api/upload';

@Component({
  selector: 'app-upload-dev',
  templateUrl: './upload-dev.component.html',
  styleUrls: ['./upload-dev.component.css']
})
export class UploadDevComponent implements OnInit {

  constructor(private FileService: FileService) {
  }

////////////////https://www.youtube.com/watch?v=mpKaAqsmmsU
    public uploader: FileUploader = new FileUploader({url: UploadURL, itemAlias: 'photo'});

    ngOnInit() {
      this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
      this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
        console.log('FileUpload:uploaded:', item, status, response);
        alert('File uploaded successfully');
      };
    }
  /*files;s
  private files1 = [];
  private url = 'http://localhost:3000/upload';
  private uploader: FileUploader;

  ngOnInit() {
    this.uploader = new FileUploader({url: this.url});


    this.FileService.getAllFileNames().subscribe(data => {
      this.files = data;
    });
    console.log( this.files);

    this.FileService.showFileNames().subscribe(response => {
      console.log(response);
      this.files = response;
/!*      for (let i = 0; i < response.json().length; i++) {
        this.files1[i] = {
          filename: response.json()[i].filename,
          originalname: response.json()[i].originalname,
          contentType: response.json()[i].contentType
        };
      }*!/
    });
  }*/

  downloadPdf(filename, contentType) {
    this.FileService.downloadPDF(filename, contentType).subscribe(
      (res) => {
        const file = new Blob([res.blob()], {type: contentType});
        const fileURL = URL.createObjectURL(file);
        window.open(fileURL);
      }
    );
  }
}
