import { Component } from '@angular/core';

@Component({
  selector: 'app-cloth-list',
  templateUrl: './cloth-list.component.html',
  styleUrl: './cloth-list.component.scss'
})
export class ClothListComponent {
  clothes []:  clothes []{
    
  }
  cloth = {
    "image": "assets/img/buzoadidas.jpeg",
    "name": "Nombre",
    "waist": "Talle",
    "price": 100, 
    "stock": 5,
    "shop": "Compra" 
  }
}
