import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BakendService } from '../service/backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login:FormGroup
resData;
  constructor(private bs: BakendService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm();
  }
  loginForm(){
    this.login = this.fb.group({
      'mobile' : ['',Validators.required],
      'password' :['',Validators.required]
    })
  }
  loginf(){
    var formData = this.login.getRawValue();
    var serilize = formData;
    this.bs.login(serilize).subscribe((res)=>{
      this.resData = res;
      if(this.resData.err == 0){
        localStorage.setItem('mobile',this.resData.data.mobile);
        localStorage.setItem('name',this.resData.data.name);
        this.router.navigate(['/user/dashboard'])
      }
    })
  }
  Forgot(){

  }
}
