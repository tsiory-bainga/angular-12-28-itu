import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  message: any;

  constructor(private userService : UserService, private router : Router) {

  }
  login() {
    let user : User = {
      username : this.username,
      password : this.password
    }
    this.userService.logIn(user)
    .subscribe( data => {
      if(data){
        if(data.auth === true){
          this.message=null;
          localStorage.setItem('isAdmin',data.isAdmin);
          this.router.navigate(['/assignments']);
        }
        else{
          this.message = "mot de passe incorrect";
        }
      }
      else{
        this.message = "aucun utilisateur trouvé";
      }
    });
  }
}
