import { Component } from '@angular/core';
import { User } from 'src/app/models/User-model';
import { UserService } from 'src/app/shared/User-service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  username = "";
  password = "";

  constructor(userservice : UserService) {

  }
  logIn() {
    let user : User = {
      username : this.username,
      password : this.password
    }
    this.userservice.lo
  }
}
