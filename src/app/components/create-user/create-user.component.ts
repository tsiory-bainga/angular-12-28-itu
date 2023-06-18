import { Component } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {
  username : string = '';
  password : string = '';
  repassword : string = '';
  admin : boolean = false;
}
