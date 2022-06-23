import { Component, OnInit } from '@angular/core';
import {SandyResourceService} from '../sandy-resource.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-levels',
  templateUrl: './levels.component.html',
  styleUrls: ['./levels.component.css']
})
export class LevelsComponent implements OnInit {

  constructor(private sandyService:SandyResourceService, private router:Router) { }
    levels;
    currentLevel;
  ngOnInit() {
    this.sandyService.getAllLevels()
      .subscribe(data => {
        this.levels=data;
      }, err=>{
        console.log(err);
      });
  }

  onGetSubjects(c) {
    this.currentLevel = c;
    let url=c._links.subjects.href; //btoa permet de convertir une chaîne de caractère en base64Url
    this.router.navigateByUrl('/subjects/' + btoa(url));
  }
}
