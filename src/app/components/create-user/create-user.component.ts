import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User-model';
import { UserService } from 'src/app/shared/User-service';

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
  message: any;

  constructor( private userService : UserService, private router : Router) { }

  ngOnInit() : void {
  }

  register(){
    if(this.username && this.password && this.repassword){
      if (this.password === this.repassword) {
        this.message=null;
        let user : User ={
          username : this.username,
          password : this.password,
          admin : this.admin,
        }
        this.userService.register(user).subscribe();
        this.router.navigate(['/login']);
      }
      else{
        this.message = 'Les mots de passes saisient ne correspondent pas';
      }
    }
    else{
      this.message = 'Veuillez remplir tous les champs';
    }
  }
}
