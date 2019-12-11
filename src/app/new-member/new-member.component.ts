import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BakendService } from '../service/backend.service';

@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.css']
})
export class NewMemberComponent implements OnInit {
detail:FormGroup;
plInfo:boolean = true;
comminfo:boolean = false;
legalinfo:boolean = false;
accinfo:boolean = false;
mobile;
nameData;
name;
  constructor(private bs: BakendService, private fb: FormBuilder) { }

  ngOnInit() {
    this.name = localStorage.getItem('name');
    this.mobile = localStorage.getItem('mobile');
    this.detailForm();
    this.patch();
  }
  detailForm(){
    this.detail = this.fb.group({
      'name' : ['',Validators.required],
      'mobile': ['',Validators.required],
      'email': ['',Validators.required],
      'password': ['',Validators.required],
      'city': ['',Validators.required],
      'state': ['',Validators.required],
      'pincode': ['',Validators.required],
      'sponserId': ['',Validators.required],
      'sponserName': ['',Validators.required],
      'aadhar': ['',Validators.required],
      'pan': ['',Validators.required],
      'accName': ['',Validators.required],
      'accNo': ['',Validators.required],
      'ifsc': ['',Validators.required],
      'addresss': ['',Validators.required]
    })
  }
  members(){
    var formData = this.detail.getRawValue();
    var serilize = formData;
    console.log(serilize)
    this.bs.addMember(serilize).subscribe((res)=>{
      console.log(res)
    })
  }
  comm(){
    this.plInfo = false;
    this.comminfo = true;
    this.legalinfo = false;
    this.accinfo = false;
  }
  legal(){
    this.plInfo = false;
    this.comminfo = false;
    this.legalinfo = true;
    this.accinfo = false;
  }
  acc(){
    this.plInfo = false;
    this.comminfo = false;
    this.legalinfo = false;
    this.accinfo = true;
  }
  backf(){
    console.log(this.plInfo,this.comminfo,this.legalinfo,this.accinfo)
    if(this.accinfo == true){
      this.plInfo = false;
      this.comminfo = false;
      this.legalinfo = true;
      this.accinfo = false;
    }
    else if(this.legalinfo == true){
      this.plInfo = false;
      this.comminfo = true;
      this.legalinfo = false;
      this.accinfo = false;
    }
    else if(this.comminfo == true){
      this.plInfo = true;
      this.comminfo = false;
      this.legalinfo = false;
      this.accinfo = false;
    }
  }
  patch(){
    this.detail.controls['sponserId'].setValue(this.mobile);
    this.detail.controls['sponserName'].setValue(this.name);
  }
}
