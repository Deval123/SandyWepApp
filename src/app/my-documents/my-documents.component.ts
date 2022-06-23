import { Component, OnInit } from '@angular/core';
import {SandyResourceService} from '../sandy-resource.service';

@Component({
  selector: 'app-my-documents',
  templateUrl: './my-documents.component.html',
  styleUrls: ['./my-documents.component.css']
})
export class MyDocumentsComponent implements OnInit {
  myDocuments;
  mode = 'list';
  constructor(private sandyService:SandyResourceService) { }

  ngOnInit() {
    this.onGetAllMyDocuments();
  }

  onGetAllMyDocuments() {
    this.sandyService.getMyDocuments()
      .subscribe(data => {
        this.myDocuments = data;
      }, err => {
        console.log(err);
      });
  }

  onNewCat() {
    this.mode = 'new-cat';
  }


  onSaveCat(value: any) {
    console.log(value);
    let url = this.sandyService.host + '/myDocuments';
    this.sandyService.postRessource(url, value)
      .subscribe(data => {
        this.mode = 'list';
        this.onGetAllMyDocuments();
      }, err => {
        console.log(err);
      });
  }

  currentlevel;

  onEditCat(cat) {
    this.sandyService.getRessource(cat._links.self.href)
      .subscribe(data => {
        this.currentlevel = data;
        this.mode='edit-cat';
      }, error1 => {
        console.log(error1);
      });
  }

  onUpdateCat(value: any) {
    console.log(value);
    let url = this.currentlevel._links.self.href;
    this.sandyService.putRessource(url, value)
      .subscribe(data => {
        this.mode = 'list';
        this.onGetAllMyDocuments();
      }, err => {
        console.log(err);
      });
  }


  onDeleteCat(cat) {
    let c = confirm('Etes vous sûr?');
    if (!c) {
      return;
    }
    this.sandyService.deleteRessource(cat._links.self.href)
      .subscribe(data => {
        this.onGetAllMyDocuments();
      }, err => {
        console.log(err);
      });
  }
}
