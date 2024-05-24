import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectUser } from '../store/selector/money-transfer.selectors';
import { saveData } from '../store/action/money-transfer.action';

@Component({
  selector: 'app-bank-to-bank',
  templateUrl: './bank-to-bank.component.html',
  styleUrl: './bank-to-bank.component.css'
})
export class BankToBankComponent {
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
          if(!(res.bank_to_bank)){
            
              this.getDataFromServer()
            
          }else{
            this.userData = res.bank_to_bank
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
