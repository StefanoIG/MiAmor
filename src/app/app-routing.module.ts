import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { PanelComponent } from './pages/panel/panel.component';
import { AddPersonComponent } from './pages/person/add-person/add-person.component';
import { EditPersonComponent } from './pages/person/edit-person/edit-person.component';
import { IndexUserComponent } from './pages/users/index-user/index-user.component';
import { CreateUserComponent } from './pages/users/create-user/create-user.component';
import { EditUserComponent } from './pages/users/edit-user/edit-user.component';
import { ReportComponent } from './pages/report/report.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'panel', component: PanelComponent },
  { path: 'add-patient', component: AddPersonComponent },
  { path: 'edit-patient', component: EditPersonComponent },
  { path: 'report-patient', component: ReportComponent },
  { path: 'panel-user', component: IndexUserComponent },
  { path: 'add-user', component: CreateUserComponent },
  { path: 'edit-user', component: EditUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
