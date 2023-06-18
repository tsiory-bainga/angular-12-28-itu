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

const routes: Routes = [
  {
    path : 'login',
    component : LoginPageComponent
  },
  {
    path: 'assignments',
    component: ToolbarSidebarComponent, // Set menu-sidebar as the layout component
    children: [
      { path: '', component: AssignmentListComponent },
      { path: 'add', component: CreateAssignmentComponent },
      { path: ':id/edit', component: EditAssignmentComponent }
    ]
  },
  {
    path: 'matieres',
    component: ToolbarSidebarComponent, // Set menu-sidebar as the layout component
    children: [
      { path: '', component: MatiereListComponent },
      { path: 'add', component: CreateMatiereComponent },
      { path: ':id/edit', component: EditMatiereComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
