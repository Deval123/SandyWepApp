import { Injectable } from '@angular/core';
//import { Http, Headers, ResponseContentType } from '@angular/http';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FileService {
  public host: string = 'http://127.0.0.1:3000/file/';

  constructor(private http: HttpClient) { }

  downloadPDF(filename, filetype): any {

    // For pass blob in API

    return this.http.get('http://127.0.0.1:3000/files/' +filename, { headers: new HttpHeaders({
        'Authorization': '{data}',
        'Content-Type': 'application/json',
      }), responseType: 'blob'});
  }


  getAllFileNames() {
    return this.http.get(this.host + '/ctFiles.files');
  }


  showFileNames() {
    return this.http.get('http://127.0.0.1:3000/files');
  }
}
