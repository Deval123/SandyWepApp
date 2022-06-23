import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './login/login.component';
import {LevelsComponent} from './levels/levels.component';
import {AdminLevelsComponent} from './admin-levels/admin-levels.component';
import {AdminResourcesComponent} from './admin-resources/admin-resources.component';
import {AdminSubjectsComponent} from './admin-subjects/admin-subjects.component';
import {ResourcesComponent} from './resources/resources.component';
import {AdminUsersComponent} from './admin-users/admin-users.component';
import {UploadDevComponent} from './upload-dev/upload-dev.component';
import {MyDocumentsComponent} from './my-documents/my-documents.component';


const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"resources", component:ResourcesComponent},
  {path:"levels", component:LevelsComponent},
  {path:"subjects", component:ResourcesComponent},
  {path:"adminLevels", component:AdminLevelsComponent},
  {path:"adminResources", component:AdminResourcesComponent},
  {path:"adminSubjects", component:AdminSubjectsComponent},
  {path:"adminUsers", component:AdminUsersComponent},
  {path:"uploadDev", component:UploadDevComponent},
  {path:"myDocuments", component:MyDocumentsComponent},



];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
