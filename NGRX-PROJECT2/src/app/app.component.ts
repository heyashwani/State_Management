import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NGRX-PROJECT2';

  constructor(private _router:Router){

  }


  pageRedirect(path:string){
    this._router.navigate([path])
  }
}
