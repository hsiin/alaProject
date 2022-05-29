import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  name: string = 'name';
  Email: string = 'admin.admin@admin.com';
  value: string = '5555555';

  constructor() { }

  ngOnInit(): void {
  }

}
