import { Component, OnInit } from '@angular/core';
import {SandyResourceService} from '../sandy-resource.service';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';


export interface levels {
  name: string;
  description: string;
  _links: any;
  __proto__: any;

}

@Component({
  selector: 'app-admin-subjects',
  templateUrl: './admin-subjects.component.html',
  styleUrls: ['./admin-subjects.component.css']
})
export class AdminSubjectsComponent implements OnInit {
  public host: string = 'http://localhost:8087';

  subjects;
  subjectsAd: any=[];
  levels;
  mode = 'list';
  level;
  constructor(private sandyService:SandyResourceService,
              private route: ActivatedRoute,
              private router: Router,) { }



  ngOnInit() {

    //this.subjectsAd = this.route.snapshot.params['subjectsAd'];
      //this.mode='subjectsAd';
      console.log(this.subjectsAd);
    console.log(this.mode);

    this.onGetAllSubjects();
    this.onGetAllLevels();
  }

  onGetAllLevels() {
    this.sandyService.getAllLevels()
      .subscribe(data => {
        this.levels =[];
        this.levels = data;
        console.log(this.levels);
      }, err => {
        console.log(err);
      });
  }

  onGave(){
    let array = [1,2,3];
    array.forEach(function (value) {
      console.log(value);
    });
  }

  onGave1(array: any=[]){
    let tab = [];
    for (let index in array) {
      console.log(index);
    };
  }

  onGetAllSubjects() {
    this.sandyService.getAllSubjects()
      .subscribe(data => {
        this.subjects=[];
        this.subjects = data;
        console.log(this.subjects);
      }, err => {
        console.log(err);
      });
  }

  onNewCat() {
    this.mode = 'new-cat';
  }
  onSaveCat(value: any) {
    console.log(value);
    let url = this.sandyService.host + '/saveSubject';
    this.sandyService.postRessource(url, value)
      .subscribe(data => {
        this.mode = 'list';
        this.onGetAllSubjects();
      }, err => {
        console.log(err);
      });
  } 

  currentsubject;

  onEditCat(cat) {
    let url = this.sandyService.host + '/Subject/'+ cat.id;

    this.sandyService.getRessource(url)
      .subscribe(data => {
        this.currentsubject = data;
        this.mode='edit-cat';
      }, error1 => {
        console.log(error1);
      });
  }

  onUpdateCat(value: any) {
    console.log(value);
    let url = this.sandyService.host + '/update/subject/'+ this.currentsubject.id;
    this.sandyService.putRessource(url, value)
      .subscribe(data => {
        this.mode = 'list';
        this.onGetAllSubjects();
      }, err => {
        console.log(err);
      });
  }
  onDeleteCat(cat) {
    let c = confirm('Etes vous sûr?');
    if (!c) {
      return;
    }
    let url = this.sandyService.host + '/delete/subject/'+ cat.id;

    this.sandyService.deleteRessource(url)
      .subscribe(data => {
        this.onGetAllSubjects();
      }, err => {
        console.log(err);
      });
  }
}
