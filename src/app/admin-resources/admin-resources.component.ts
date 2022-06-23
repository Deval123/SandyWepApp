import { Component, OnInit } from '@angular/core';
import {SandyResourceService} from '../sandy-resource.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpEventType, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-admin-resources',
  templateUrl: './admin-resources.component.html',
  styleUrls: ['./admin-resources.component.css']
})
export class AdminResourcesComponent implements OnInit {
  selectedFiles: FileList;
  currentFileUpload: File;
  name: string;
  progress: { percentage: number } = { percentage: 0 };
  subjects;
  resources;
  resourcesFind
  mode = 'list';
  constructor(
    private sandyService:SandyResourceService,
    private route: ActivatedRoute,
    private router: Router,

  ) {}
  ngOnInit() {
    this.onGetAllResources();
    this.onGetAllSubjects();

  }

  onGetAllResources() {
    this.sandyService.getAllResources()
      .subscribe(data => {
        this.resources = data;
        console.log(this.resources);
      }, err => {
        console.log(err);
      });
  }

  onNewCat() {
    this.mode = 'new-cat';
  }


  onSaveCat(value: any) {
    console.log(value);
    let url = this.sandyService.host + '/saveResources';
    this.sandyService.postRessource(url, value)
      .subscribe(data => {
        this.mode = 'list';
        this.onGetAllResources();
      }, err => {
        console.log(err);
      });
  }

  currentresource;

  onEditCat(cat) {
    let url = this.sandyService.host + '/Resources/'+ cat.id;

    this.sandyService.getRessource(url)
      .subscribe(data => {
        this.currentresource = data;
        this.mode='edit-cat';
      }, error1 => {
        console.log(error1);
      });
  }

  onUpdateCat(value: any) {
    console.log(value);
    let url = this.sandyService.host + '/update/resources/'+ this.currentresource.id;
    this.sandyService.putRessource(url, value)
      .subscribe(data => {
        this.mode = 'list';
        this.onGetAllResources();
      }, err => {
        console.log(err);
      });
  }
  onDeleteCat(cat) {
    let c = confirm('Etes vous sûr?');
    if (!c) {
      return;
    }
    let url = this.sandyService.host + '/delete/Resources/'+ cat.id;

    this.sandyService.deleteRessource(url)
      .subscribe(data => {
        this.onGetAllResources();
      }, err => {
        console.log(err);
      });
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

  selectFile(event) {
    const file = event.target.files.item(0);
    if (file.type.match('text.*|image.*|application.*|video.*|audio.*')) {
      this.selectedFiles = event.target.files;
    } else {
      alert('invalid format!');
    }
  }

  savePatient(value: any) {
    console.log(value);
    console.log(name);
    this.name=value.name;
    console.log(this.name);

    this.progress.percentage = 0;
    this.currentFileUpload = this.selectedFiles.item(0);
    this.sandyService.pushFileToStorage(this.currentFileUpload, this.name).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this. onSaveCat(value);
        this.progress.percentage = Math.round(100 * event.loaded / event.total);

      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });
    console.log(this.currentFileUpload.name);

    // this.getImageUser();
    this.selectedFiles = undefined


  }


/*  quitter(){
    this.route.navigate(['/patient/patient-dashboard']);
  }*/

  getResourceSByName(value: any) {
    console.log(value.name);
    this.sandyService.getRessource(this.sandyService.host + '/getResourcesByName/'+ value.name)
      .subscribe(data => {
        this.resourcesFind=[];
        this.resourcesFind = data;
        console.log(this.resourcesFind);
      }, err => {
        console.log(err);
      });
    this.mode = 'find';
  }
}
