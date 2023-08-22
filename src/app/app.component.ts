import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Prueba';
  abre : boolean = false; 

  abrir(){
    this.abre = !this.abre;
  }
}
