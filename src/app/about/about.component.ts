import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }  from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  goalId: number; 

  constructor(private route: ActivatedRoute, private router: Router) {
    //gets the value from the route (URL) parameter
    this.route.params.subscribe(
      res => this.goalId= res.id
    );
  }

  ngOnInit() {
  }

  sendMeHome(){
    this.router.navigate(['']); //the home path is blank
  }

}
