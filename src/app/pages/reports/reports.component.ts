import { Component, OnInit } from '@angular/core';
import {ReportsList} from "../../Model/model";
import {NzModalService} from "ng-zorro-antd/modal";

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  listOfData: ReportsList[] = [];
  filteredData: ReportsList[] = [];
  filterSearch : string = '';
  isVisible = false;
  isOkLoading = false;
  constructor(private modal: NzModalService) {};

  ngOnInit(): void {
    const data = [];
    for (let i = 0; i < 80; i++) {
      data.push({
        id: i,
        society_Name: `Edward King ${i}`,
        developer_Name: `Edward King ${i}`,
      });
    }
    this.listOfData = data;
    this.filteredData = data;
  }
  searchData(searchValue: any) {
    this.listOfData = this.filteredData.filter((item) => {
      return item.society_Name.toLowerCase().includes(searchValue.toLowerCase());
    });
  }
  showDeleteConfirm(): void {
    this.modal.confirm({
      nzTitle: 'Are you sure to ban this person?',
      nzOkText: 'Ban',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => console.log('OK'),
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
  }
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 300);
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}
