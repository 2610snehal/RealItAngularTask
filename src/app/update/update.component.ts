import { Component, OnInit } from '@angular/core';
import { RealService } from '../services/real.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Real } from '../real';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{

  constructor(private realSerice:RealService, private router:Router, private actRout:ActivatedRoute ){}

  formData:Real ={
    id: 0,
    andor: '',
    fieldname: '',
    condition: '',
    value: ''
  }

  ngOnInit(): void {
    this.actRout.paramMap.subscribe((param)=>{
      let id=Number(param.get('id'))
      this.getById(id);
    })
  }

  getById(id:number){
    this.realSerice.edit(id).subscribe((data)=>{
      this.formData = data;
    })
  }

  funUpdate(){
    this.realSerice.update(this.formData).subscribe({
      next:(data)=>{
        this.router.navigate(['table']);
      },error: (err)=>{
        console.log(err);
      }
    })
  }
}
