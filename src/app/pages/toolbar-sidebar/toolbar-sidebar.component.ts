import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar-sidebar',
  templateUrl: './toolbar-sidebar.component.html',
  styleUrls: ['./toolbar-sidebar.component.scss']
})
export class ToolbarSidebarComponent {

  constructor( private router: Router) { }

  ngOnInit(){
    if(!localStorage.getItem('isAdmin')){
      this.router.navigate(['/login']);
    }
  }
  logOut(){
    localStorage.removeItem('isAdmin');
    this.router.navigate(['/login']);
  }
}
