import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  email:string = "";
  password: string = "";

  constructor(private loginService:LoginServiceService) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    console.log(`Email is:${this.email}, Password is: ${this.password}`);
    this.loginService.login(this.email, this.password);

  }
}
