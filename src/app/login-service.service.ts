import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class LoginServiceService {

  constructor(private http:HttpClient) { }

  login(email:string, password:string ): Observable<LoginData>{
    let server_url: string = "/fpipserver/login/";
    let body: any = {
      email:email,
      password: password
    }
    return this.http.post<LoginData>(server_url,body)
      // Todo: How do i return the data to the calling function?
  }
}

export type LoginData ={
  status: number;
  uuid: string;
  userRole: string;
  menu: [any];
  locator_id: number;
  locator_Name: string;
  
}
