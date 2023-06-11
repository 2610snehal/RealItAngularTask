import { Component } from '@angular/core';
import { RealService } from '../services/real.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Real } from '../real';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

constructor(private realService:RealService, private router:Router){}

formData:Real = {
  id:0,
  andor: '',
  fieldname: '',
  condition: '',
  value: ''
}

funAdd(){
  this.realService.add(this.formData).subscribe({
    next:(data)=>{
      this.router.navigate(['table']);
    },
    error:err=>{
      console.log(err);
    }
  })
}


}
