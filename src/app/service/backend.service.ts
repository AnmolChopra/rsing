import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BakendService {
Url="http://localhost:1234/"
  constructor(private http:HttpClient) { }

  // login
  login(data){
    return this.http.post(this.Url+'login1',data);
  }
  // Add Member
  addMember(data){
    return this.http.post(this.Url+'addMember',data);
  }
  // fetch Direct
  fetchDirect(data){
    return this.http.get(this.Url+'fetchDirect/'+data);
  }
  // fetch Name
  fetchName(data){
    return this.http.get(this.Url+'fetchName/'+data);
  }
  //   fetch Team 
  fetchTeam(data){
    return this.http.get(this.Url+'fetchTeam/'+data);
  }
}
