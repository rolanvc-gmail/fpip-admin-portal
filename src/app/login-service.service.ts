import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient) { }

  login(email:string, password:string ): any {
    let server_url: string = "/fpipserver/login/";
    let body: any = {
      email:email,
      password: password
    }
    this.http.post(server_url,body).subscribe( data=>{ 
      console.log(data)
      // Todo: How do i return the data to the calling function?
    });

  }
}
