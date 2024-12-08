import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrl: './purchase-list.component.css'
})
export class PurchaseListComponent implements OnInit {

  purchaseList: any[]=[];
  constructor(private http:HttpClient){

  }

  
  ngOnInit(): void {
    this.loadPurchae();
  }
  loadPurchae(){
    this.http.get("https://localhost:7036/api/StockInventory/GetAllPurchase").subscribe((res:any)=>{
      this.purchaseList=res.data;
    })
  }
}
