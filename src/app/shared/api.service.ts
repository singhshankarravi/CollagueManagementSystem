import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http : HttpClient) { }


  postCollegue(data : any){
    return this.http.post<any>("http://localhost:3000/posts",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getCollegue(){
    return this.http.get<any>("http://localhost:3000/posts")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateCollegue(data : any, id : number){
    const url=`${"http://localhost:3000/posts"}/${id}`;
    return this.http.put<any>(url,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteCollegue( id : number){
    const url=`${"http://localhost:3000/posts"}/${id}`;
    return this.http.delete<any>(url)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

}
