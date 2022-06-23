import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule, MatSelectModule, MatInputModule,  MatButtonModule, MatMenuModule,MatToolbarModule, MatIconModule} from '@angular/material';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LevelsComponent } from './levels/levels.component';
import { ResourcesComponent } from './resources/resources.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminLevelsComponent } from './admin-levels/admin-levels.component';
import { AdminSubjectsComponent } from './admin-subjects/admin-subjects.component';
import { AdminResourcesComponent } from './admin-resources/admin-resources.component';
import {FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import { UploadDevComponent } from './upload-dev/upload-dev.component';
import { MyDocumentsComponent } from './my-documents/my-documents.component';
import {MatCardModule} from '@angular/material/card';
import { AdminLevelsModule } from './admin-levels/admin-levels.module';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LevelsComponent,
    ResourcesComponent,
    SubjectsComponent,
    AdminUsersComponent,
    AdminLevelsComponent,
    AdminSubjectsComponent,
    AdminResourcesComponent,
    FileSelectDirective,
    UploadDevComponent,
    MyDocumentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, FormsModule, MatCardModule, RouterModule, MatToolbarModule,MatIconModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    AdminLevelsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
