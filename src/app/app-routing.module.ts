import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ToolbarSidebarComponent } from './pages/toolbar-sidebar/toolbar-sidebar.component';
import { CreateAssignmentComponent } from './components/create-assignment/create-assignment.component';
import { AssignmentListComponent } from './pages/assignment-list/assignment-list.component';
import { MatiereListComponent } from './pages/matiere-list/matiere-list.component';
import { CreateMatiereComponent } from './components/create-matiere/create-matiere.component';
import { EditAssignmentComponent } from './components/edit-assignment/edit-assignment.component';
import { EditMatiereComponent } from './components/edit-matiere/edit-matiere.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { FormContainerComponent } from './pages/form-container/form-container.component';

const routes: Routes = [
  {
    path : '',
    component : LoginPageComponent,
    children: [
      { path: '', component: LoginFormComponent },
      { path: 'register', component: CreateUserComponent }
    ]
  },
  {
    path : 'login',
    component : LoginPageComponent,
    children: [
      { path: '', component: LoginFormComponent },
      { path: 'register', component: CreateUserComponent }
    ]
  },
  {
    path: 'assignments',
    component: ToolbarSidebarComponent,
    children: [
      { path: '', component: AssignmentListComponent },
      { 
        path: 'add', 
        component: FormContainerComponent,
        children : [
          { path: '', component: CreateAssignmentComponent }
        ]
      },
      { 
        path: ':id/edit', 
        component: FormContainerComponent,
        children : [
          { path: '', component: EditAssignmentComponent }
        ]
      }
    ]
  },
  {
    path: 'matieres',
    component: ToolbarSidebarComponent,
    children: [
      { path: '', component: MatiereListComponent },
      { 
        path: 'add', 
        component: FormContainerComponent,
        children : [
          { path: '', component: CreateMatiereComponent }
        ]
      },
      { 
        path: ':id/edit', 
        component: FormContainerComponent,
        children : [
          { path: '', component: EditMatiereComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
