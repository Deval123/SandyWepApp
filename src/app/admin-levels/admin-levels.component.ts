import { Component, OnInit } from '@angular/core';
import {SandyResourceService} from '../sandy-resource.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-admin-levels',
  templateUrl: './admin-levels.component.html',
  styleUrls: ['./admin-levels.component.css']
})
export class AdminLevelsComponent implements OnInit {
  levels;
  mode = 'list';
  levelFind;
  FindSubjectLevel;
  FindResourcesSubject;
  constructor(
    private sandyService:SandyResourceService,
    private route: ActivatedRoute,
    private router: Router,
    //private service: HeroService
  ) {}
  ngOnInit() {
    this.onGetAllLevels();
  }

  onGetAllLevels() {
     this.sandyService.getAllLevels()
       .subscribe(data => {
         this.levels = data;
         console.log(this.levels);
       }, err => {
         console.log(err);
       });
  }

  onNewCat() {
    this.mode = 'new-cat';
  }


  onSaveCat(value: any) {
    console.log(value);
    let url = this.sandyService.host + '/saveLevel';
    this.sandyService.postRessource(url, value)
      .subscribe(data => {
        this.mode = 'list';
        this.onGetAllLevels();
      }, err => {
        console.log(err);
      });
  }

  currentlevel;

  onEditCat(cat) {
    let url = this.sandyService.host + '/'+ cat.id;

    this.sandyService.getRessource(url)
      .subscribe(data => {
        this.currentlevel = data;
        this.mode='edit-cat';
      }, error1 => {
        console.log(error1);
      });
  }

  onUpdateCat(value: any) {
    console.log(value);
    let url = this.sandyService.host + '/'+ this.currentlevel.id;
    this.sandyService.putRessource(url, value)
      .subscribe(data => {
        this.mode = 'list';
        this.onGetAllLevels();
      }, err => {
        console.log(err);
      });
  }


  onDeleteCat(cat) {
    let c = confirm('Etes vous sûr?');
    if (!c) {
      return;
    }
    let url = this.sandyService.host + '/'+ cat.id;

    this.sandyService.deleteRessource(url)
      .subscribe(data => {
        this.onGetAllLevels();
      }, err => {
        console.log(err);
      });
  }

  onSub(c) {
    
  }

  gotoSub(level) {
    /*let subjectsAd = level ? level.subjects : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    console.log()
    this.router.navigate(['/adminSubjects', { subjectsAd: subjectsAd }]);*/
    console.log(level);
    this.sandyService.getRessource(this.sandyService.host + '/getSubjectByLevel/' + level.id)
      .subscribe(data => {
        this.FindSubjectLevel = [];
        this.FindSubjectLevel = data;
        console.log(this.FindSubjectLevel);
      }, err => {
        console.log(err);
      });
    this.mode = 'detailSub';
  }

  getLevelSByName(value: any) {
    console.log(value.name);
    this.sandyService.getRessource(this.sandyService.host + '/getOneLevelByName/' + value.name)
      .subscribe(data => {
        this.levelFind = [];
        this.levelFind = data;
        console.log(this.levelFind);
      }, err => {
        console.log(err);
      });
    this.mode = 'find';
  }

  gotoRes(sub) {
    console.log(sub);
    this.sandyService.getRessource(this.sandyService.host + '/getResourcesBySubject/' + sub.id)
      .subscribe(data => {
        this.FindResourcesSubject = [];
        this.FindResourcesSubject = data;
        console.log(this.FindResourcesSubject);
      }, err => {
        console.log(err);
      });
    this.mode = 'detailRes';
  }

  gotoRead(c) {

  }
}
