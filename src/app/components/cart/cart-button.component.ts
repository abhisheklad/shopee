import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services';

@Component({
  selector: 'app-cart-button',
  templateUrl: 'cart-button.component.html',
})
export class CartButtonComponent implements OnInit {
  cartBadge: number;

  constructor(private cartService: CartService) {

  }

  ngOnInit(): void {
    this.cartService.getItems().subscribe(items => this.cartBadge = items.length);
    window.addEventListener('fullstory/rageclick', function(e) {
      if (window.confirm("Seems like you are stressed. Need a mindfulness break?")) {
        window.open("https://www.youtube.com/watch?v=ZToicYcHIOU", "Thanks for Visiting!");
      }   
    });
  }
}
