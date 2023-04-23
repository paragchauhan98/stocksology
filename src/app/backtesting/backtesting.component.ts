import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


interface Stock {
  value: string;
  viewValue: string;
}
interface Segment {
  value: string;
  viewValue: string;
}
interface Options {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-backtesting',
  templateUrl: './backtesting.component.html',
  styleUrls: ['./backtesting.component.css']
})
export class BacktestingComponent implements OnInit {
  selectedValue?: string;
  selectedSegment?: string
  selectedOptionTpye?:string
  segments: Segment[] = [
    {value: 'Futures', viewValue: 'Futures'},
    {value: 'Options', viewValue: 'Options'},

  ];
  options: Options[] = [
    {value: 'CE', viewValue: 'CE'},
    {value: 'FE', viewValue: 'FE'},

  ];
  stocks: Stock[] = [
    {value: 'stock-0', viewValue: 'Stock'},
    {value: 'stock-1', viewValue: 'Stock1'},
    {value: 'stock-2', viewValue: 'Stock2'},
  ];
  buySell: any;
  buyOrSell: string[] = ['Buy','Sell'];
   value1:any
     value3:any
someWork:any=[
  {
    id:1,
    name:'short',
    value:"hello",
    value2:"No"
  },
  {
    id:2,
    name:'shortCP',
    value:"Parag",
    value2:"yes",
  }
]
  constructor() { }

  ngOnInit(): void {
    
    
  }

  setValue(id:any){
    
this.value1=this.someWork[id].value
this.value3=this.someWork[id].value2
  }
chang(e:any){
  console.log(e)
}
}
