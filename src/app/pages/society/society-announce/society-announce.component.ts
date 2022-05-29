import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-society-announce',
  templateUrl: './society-announce.component.html',
  styleUrls: ['./society-announce.component.css']
})
export class SocietyAnnounceComponent implements OnInit {
  id : string = '';


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>{
      this.id = params['id'];
      console.log(this.id)
    });
  }

}
