import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ClothesCartService } from '../clothes-cart.service';
import { Clothes } from '../clothes-list/clothes';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartList$: Observable<Clothes[]>;
  entrada:number[]=[];
  constructor(cart: ClothesCartService) {
    this.cartList$ = cart.cartList.asObservable();
  }


}
