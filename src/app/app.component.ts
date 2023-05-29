import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  lista:string[]=["20","30","40","50","60","70","70","70","70","70","70","70","70","70",];
  title = 'bases';
  comprar(valor:string){
    if(confirm('Costo: '+ valor )){
      confirm('compra terminada')
    }
  }
}
