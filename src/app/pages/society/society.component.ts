import { Component, OnInit } from '@angular/core';
import { SocietyData } from '../../Model/model';
import { SocietyService } from './services/society.service';
@Component({
  selector: 'app-society',
  templateUrl: './society.component.html',
  styleUrls: ['./society.component.css'],
})
export class SocietyComponent implements OnInit {
  listOfData: Array<any> = [];
  filteredData: SocietyData[] = [];
  filterSearch: string = '';
  constructor(public societyService: SocietyService) {}

  ngOnInit(): void {
    this.societyService.getAllSoc().subscribe((res: any) => {
      console.log(res);
      this.listOfData = res.map((el: any) => ({
        id: el.payload.doc.id,
        name: el.payload._delegate.doc._document.data.value.mapValue.fields
          .CompleteInformationSociety.mapValue.fields.name.stringValue,
        phoneNumber:
          el.payload._delegate.doc._document.data.value.mapValue.fields
            .CompleteInformationSociety.mapValue.fields.phoneNumber.stringValue,
        description:
          el.payload._delegate.doc._document.data.value.mapValue.fields
            .CompleteInformationSociety.mapValue.fields.Description.stringValue,
        email:
          el.payload._delegate.doc._document.data.value.mapValue.fields
            .CompleteInformationSociety.mapValue.fields.email.stringValue,
        photo:
          el.payload._delegate.doc._document.data.value.mapValue.fields
            .CompleteInformationSociety.mapValue.fields.photo.stringValue,
        localisation:
          el.payload._delegate.doc._document.data.value.mapValue.fields
            .CompleteInformationSociety.mapValue.fields.Localisation
            .stringValue,
      }));
    });
  }
  searchData(searchValue: any) {
    this.listOfData = this.filteredData.filter((item) => {
      return item.name.toLowerCase().includes(searchValue.toLowerCase());
    });
  }
}
