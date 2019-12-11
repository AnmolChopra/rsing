import { Component, OnInit } from '@angular/core';
import { BakendService } from '../service/backend.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
count;
team;
mobile;
earning;
cashBack;
  constructor(private bs: BakendService) { }

  ngOnInit() {
    this.mobile = localStorage.getItem('mobile');
    this.direct();
  }
  direct(){
    this.bs.fetchDirect(this.mobile).subscribe((res)=>{
      this.count = res
    })
    this.bs.fetchTeam(this.mobile).subscribe((res)=>{
      this.team = res
    })
  }
}
