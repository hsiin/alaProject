import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Announce} from "../../../Model/model";

@Component({
  selector: 'app-society-details',
  templateUrl: './society-details.component.html',
  styleUrls: ['./society-details.component.css']
})
export class SocietyDetailsComponent implements OnInit {
  id : string = '';
  listOfData: Announce[] = [];
  filteredData: Announce[] = [];
  filterSearch : string = '';
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>{
      this.id = params['id'];
      console.log(this.id)
    });
    const data = [];
    for (let i = 0; i < 80; i++) {
      data.push({
        id: i,
        society_Name: `Edward King ${i}`,
        title: `Edward King ${i}`,
        type: `Type ${i}`
      });
    }
    this.listOfData = data;
    this.filteredData = data;
  };
  searchData(searchValue: any) {
    this.listOfData = this.filteredData.filter((item) => {
      return item.society_Name.toLowerCase().includes(searchValue.toLowerCase());
    });
  }

}
