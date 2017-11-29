import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }  from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  goalId: number; 
  goals: any; 

  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) {
    //gets the value from the route (URL) parameter
    this.route.params.subscribe(
      res => this.goalId= res.id
    );
  }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res); 
  }

  sendMeHome(){
    this.router.navigate(['']); //the home path is blank
  }

}
