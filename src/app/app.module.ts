import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelComponent } from './pages/panel/panel.component';
import { AuthComponent } from './pages/auth/auth.component';
import { AddPersonComponent } from './pages/person/add-person/add-person.component';
import { EditPersonComponent } from './pages/person/edit-person/edit-person.component';
import { CreateUserComponent } from './pages/users/create-user/create-user.component';
import { EditUserComponent } from './pages/users/edit-user/edit-user.component';
import { IndexUserComponent } from './pages/users/index-user/index-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { ReportComponent } from './pages/report/report.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    AuthComponent,
    AddPersonComponent,
    EditPersonComponent,
    CreateUserComponent,
    EditUserComponent,
    IndexUserComponent,
    ReportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
