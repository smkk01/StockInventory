import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale-list',
  templateUrl: './sale-list.component.html',
  styleUrl: './sale-list.component.css'
})
export class SaleListComponent implements OnInit {
  saleList: any [] = [];

  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {
    this.loadSales();
  }
  loadSales() {
    this.http.get("https://localhost:7036/api/StockInventory/GetAllSale").subscribe((res:any) => {
      this.saleList = res.data;
    })
  }
}
