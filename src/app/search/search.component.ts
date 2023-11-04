import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { product } from 'data-type';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchResult:undefined|product[]
  searchQuery:string='';
  constructor(private activteRoute:ActivatedRoute,router:Router,private dataService:DataService){}

//   ngOnInit(){
// let query =this.activteRoute.snapshot.paramMap.get('query');
// console.log(query);
// query && this.dataService.searchProducts(query).subscribe((result)=>{
//   this.searchResult=result;
// }) 
//   }


ngOnInit() {
  this.activteRoute.params.subscribe(params=>{
   this.searchQuery=params['query'];
   this.performSearch(this.searchQuery);
  })
}

performSearch(query:string){
 this.dataService.searchList(query).subscribe((val)=>{
   if(val){
     this.searchResult=val;
   }
 })
}

}
