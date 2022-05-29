import { Component, OnInit } from '@angular/core';
import {ItemData} from "../../Model/model";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  listOfData: ItemData[] = [];
  filteredData: ItemData[] = [];
  filterSearch : string = '';

  ngOnInit(): void {
    const data = [];
    for (let i = 0; i < 80; i++) {
      data.push({
        id: i,
        name: `Edward King ${i}`,
        lastName: `Edward King ${i}`,
        PhoneNumber: `55555555`
      });
    }
    this.listOfData = data;
    this.filteredData = data;
  }
  searchData(searchValue: any) {
    this.listOfData = this.filteredData.filter((item) => {
      return item.name.toLowerCase().includes(searchValue.toLowerCase());
    });
  }
}
