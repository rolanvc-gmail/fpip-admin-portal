import { Component, OnInit } from '@angular/core';
import { LoginServiceService, LoginData } from '../login-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  email:string = "";
  password: string = "";
  badlogin: boolean = false;

  constructor(private loginService:LoginServiceService) {
    this.badlogin=false;
   }

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.loginService.login(this.email, this.password).subscribe( (data:LoginData) => {
        if ( data.status === 0){
          window.location.href="/main"
        }else{
          console.log("Wrong username or password.")
          this.badlogin=true;
        }

      })

  }
}
