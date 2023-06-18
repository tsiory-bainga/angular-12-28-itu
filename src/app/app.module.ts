import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LogoDisplayComponent } from './components/logo-display/logo-display.component';
import { CreateAssignmentComponent } from './components/create-assignment/create-assignment.component';
import { EditAssignmentComponent } from './components/edit-assignment/edit-assignment.component';
import { AssignmentListItemComponent } from './components/assignment-list-item/assignment-list-item.component';
import { ToolbarSidebarComponent } from './pages/toolbar-sidebar/toolbar-sidebar.component';
import { AssignmentListComponent } from './pages/assignment-list/assignment-list.component';
import { CreateMatiereComponent } from './components/create-matiere/create-matiere.component';
import { EditMatiereComponent } from './components/edit-matiere/edit-matiere.component';
import { MatiereListComponent } from './pages/matiere-list/matiere-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LoginFormComponent,
    LogoDisplayComponent,
    CreateAssignmentComponent,
    EditAssignmentComponent,
    AssignmentListItemComponent,
    ToolbarSidebarComponent,
    AssignmentListComponent,
    CreateMatiereComponent,
    EditMatiereComponent,
    MatiereListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
