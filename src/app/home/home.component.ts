import { Component, OnInit } from '@angular/core';
import { RealService } from '../services/real.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  allData : any;

  constructor(private realService:RealService){}
  // ngOnInit(): void {
  //   this.realService.getAll().subscribe((res)=>{
  //     const data = JSON.stringify(res)
  //     this.allData = data;
  //     console.log(data);

  //   })
  // }

  ngOnInit(): void {
    this.realService.getAll().subscribe((data)=>{
      this.allData =data;
    })
  }

  deleteItem(id:number){
    this.realService.delete(id).subscribe({
      next:(data)=>{
        this.allData = this.allData.filter((del: { id: number; }) => del.id != id)
      },
    })
  }


}
