import { Injectable } from '@angular/core';
import {AuthenticationService} from './authentication.service';
import {HttpClient, HttpRequest, HttpEvent, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class SandyResourceService { // https://sandyapi1.herokuapp.com/
  public host: string = 'http://localhost:8087';
public host1: string ='http://localhost:8087/subjects/'; //S1/level

/*  public host: string = 'https://sandyapi1.herokuapp.com';
  public host1: string ='https://sandyapi1.herokuapp.com/subjects/'; //S1/level*/
  constructor(private http: HttpClient, private authen: AuthenticationService) { }



/*  getAllLevels() {
    return this.http.get(this.host + '/levels');
  }*/

  getAllLevels() {
    return this.http.get(this.host + '/getAllLevel');
  }

  getAllResources() {
    return this.http.get(this.host + '/getAllResources');
  }

  getAllLevel(lien:string) {
    return this.http.get(this.host1 + lien +'/level');
  }

  getMyDocuments() {
    return this.http.get(this.host + '/myDocuments');
  }

  getAllSubjects() {
    return this.http.get(this.host + '/getAllSubject');
  }

  getRessource(url) {
    let header = new HttpHeaders({'Authorization': 'Bearer ' + this.authen.jwt});
    return this.http.get(url, {headers: header});
  }


  putRessource(url: any, data: any) {
    let header = new HttpHeaders({'Authorization': 'Bearer ' + this.authen.jwt});
    return this.http.put(url, data, {headers: header});
  }


  deleteRessource(url) {
    let header = new HttpHeaders({'Authorization': 'Bearer ' + this.authen.jwt});
    return this.http.delete(url, {headers: header});
  }

  postRessource(url, data) {
    let header = new HttpHeaders({'Authorization': 'Bearer ' + this.authen.jwt});
    return this.http.post(url, data, {headers: header});
  }


  patchRessource(url: any, value: any) {
    let header = new HttpHeaders({'Authorization': 'Bearer ' + this.authen.jwt});
    return this.http.patch(url, value, {headers: header}); // patch met ajour unique l'information envoyé
  }

  pushFileToStorage(file: File,name:string): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
    let header = new HttpHeaders({'Authorization': 'Bearer ' + this.authen.jwt});
console.log(name);
    formdata.append('file', file);
    formdata.append('name',name);
    const req = new HttpRequest('POST', `${this.host + '/uploads'}`, formdata, {
      reportProgress: true,
      responseType: 'text',
      headers: header
    });

    return this.http.request(req);
  }

}
