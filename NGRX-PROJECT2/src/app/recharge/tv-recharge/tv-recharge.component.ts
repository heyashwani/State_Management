import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectUser } from '../store/selector/recharge.selectors';
import { saveData2 } from '../store/action/recharge.action';

@Component({
  selector: 'app-tv-recharge',
  templateUrl: './tv-recharge.component.html',
  styleUrl: './tv-recharge.component.css'
})
export class TvRechargeComponent {
  user$: Observable<any>;
  userData:any = [];
  
  constructor(private store: Store<any>,
    private http:HttpClient,
    private router:Router) {
      this.user$ = store.pipe(select(selectUser))
      
    }

    ngOnInit(): void {

      this.user$.subscribe((res:any)=>{
        if(res){
          if(!(res.tv_recharge)){
            
              this.getDataFromServer()
            
          }else{
            this.userData = res.tv_recharge
          }
        }else{
          
            this.getDataFromServer()
          
        }
        
      })

      
    }

    getDataFromServer(){
      this.http.get(`https://jsonplaceholder.typicode.com/users`).subscribe((res:any)=>{
        this.store.dispatch(saveData2({ array:res }));
      })
    }
  
    pageRedirect(path:string){
      this.router.navigate([path])
    }
  
    refresh(){
      this.getDataFromServer()
    }
}
