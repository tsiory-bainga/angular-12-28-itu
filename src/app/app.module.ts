import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LoginFormComponent,
    LogoDisplayComponent,
    CreateAssignmentComponent,
    EditAssignmentComponent,
    AssignmentListItemComponent,
    ToolbarSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
