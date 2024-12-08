import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrl: './stock.component.css'
})
export class StockComponent implements OnInit {

  stockList: any[]= [];
  constructor(private http: HttpClient){

  }
  ngOnInit(): void {
    this.getStock();
  }

  getStock() {
    this.http.get("https://localhost:7036/api/StockInventory/GetAllStock").subscribe((res: any)=>{
      this.stockList = res.data;
    })
  }

}
