import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

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
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ChampPhotoComponent } from './components/champ-photo/champ-photo.component';
import { FormContainerComponent } from './pages/form-container/form-container.component';
import { RendreDevoirDialogComponent } from './components/rendre-devoir-dialog/rendre-devoir-dialog.component';
import { HttpClientModule } from '@angular/common/http';

registerLocaleData(localeFr, 'fr');
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
    MatiereListComponent,
    CreateUserComponent,
    ChampPhotoComponent,
    FormContainerComponent,
    RendreDevoirDialogComponent
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
    MatSelectModule,
    FormsModule,
    MatCardModule,
    MatTabsModule,
    MatDialogModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},
    {provide: LOCALE_ID, useValue: 'fr' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
