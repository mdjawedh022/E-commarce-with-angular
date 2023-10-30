import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsComponent {
  kidsData: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getKidsData().subscribe((data:any) => {
      this.kidsData = data;
      console.log(data)
    });
  }
}
