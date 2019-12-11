import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
name;
  constructor(private router: Router) { }

  ngOnInit() {
    this.name= localStorage.getItem('name');
  }
  signOut(){
    localStorage.removeItem('mobile');
    localStorage.removeItem('name');
    this.router.navigate(['/login'])
  }
}
