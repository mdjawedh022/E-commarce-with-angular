import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-mens',
  templateUrl: './mens.component.html',
  styleUrls: ['./mens.component.css'],
})
export class MensComponent implements OnInit {
  menData: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getMenData().subscribe((data: any) => {
      this.menData = data;
      console.log(data);
    });
  }
}
