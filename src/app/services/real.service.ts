import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Real } from '../real';

@Injectable({
  providedIn: 'root'
})
export class RealService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<Real[]>('http://localhost:3000/realit');
  }

  add(data:Real){
    return this.http.post('http://localhost:3000/realit', data);
  }

  edit(id:number){
    return this.http.get<Real>('http://localhost:3000/realit/'+id);
  }

  update(data:Real){
    return this.http.put('http://localhost:3000/realit/'+data.id, data);
  }

  delete(id:number){
    return this.http.delete<Real>('http://localhost:3000/realit/'+id);
  }


}
