import { Component, OnInit } from '@angular/core';
import { RealService } from '../services/real.service';
import { Real } from '../real';

@Component({
  selector: 'app-addtbl',
  templateUrl: './addtbl.component.html',
  styleUrls: ['./addtbl.component.css']
})
export class AddtblComponent implements OnInit{

  allData : any;

  constructor(private realService:RealService){}
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
