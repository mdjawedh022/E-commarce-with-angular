import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent {
  womenData: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getWomenData().subscribe((data:any) => {
      this.womenData = data;
      console.log(data)
    });
  }
}
