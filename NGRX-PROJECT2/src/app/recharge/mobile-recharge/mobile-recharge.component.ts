import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectUser } from '../store/selector/recharge.selectors';
import { saveData } from '../store/action/recharge.action';

@Component({
  selector: 'app-mobile-recharge',
  templateUrl: './mobile-recharge.component.html',
  styleUrl: './mobile-recharge.component.css'
})
export class MobileRechargeComponent implements OnInit {
  user$: Observable<any>;
  userData:any = [];

  constructor(private store: Store<any>,
    private http:HttpClient,
    private router:Router) {
      this.user$ = store.pipe(select(selectUser));
      
    }

    ngOnInit(): void {

      this.user$.subscribe((res:any)=>{
        if(res){
          if(!(res.mobile_recharge)){
            
              this.getDataFromServer()
            
          }else{
            this.userData = res.mobile_recharge
          }
        }else{
          
            this.getDataFromServer()
          
        }
        
      })

      
    }

    getDataFromServer(){
      this.http.get(`https://reqres.in/api/users?page=1`).subscribe((res:any)=>{
        this.store.dispatch(saveData({ array:res.data }));
      })
    }
  
    pageRedirect(path:string){
      this.router.navigate([path])
    }
  
    refresh(){
      this.getDataFromServer()
    }
}
