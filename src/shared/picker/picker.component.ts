import { Component, OnInit, AfterViewInit } from '@angular/core';
import MobileSelect from 'mobile-select';
import { HOURS, MINUTES } from './time';

@Component({
  selector: 'app-picker',
  templateUrl: './picker.component.html',
  styleUrls: ['./picker.component.scss']
})
export class PickerComponent implements OnInit, AfterViewInit {

  private _picker: any;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this._initPickerView();
    setTimeout(() => {
      console.log(this._picker);
      this._picker.locatePosition(0, 10);
      this._picker.locatePosition(1, 10);
    }, 1000);
  }

  private _initPickerView() {
    this._picker = new MobileSelect({
      trigger: '#day',
      title: 'Change Time',
      wheels: [
        {
          data: HOURS,
        },
        {
          data: MINUTES,
        }
      ],
      ensureBtnText: 'OK',
      cancelBtnText: 'Cancel',
      position: [0, 0],
      callback: (index, data) => {
        console.log(data.join(':'));
      },
    });
  }
}
