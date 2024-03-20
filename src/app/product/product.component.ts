import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../Models/Product';
import { ChipModule } from 'primeng/chip';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: '[app-product]',
  standalone: true,
  imports: [CommonModule, ChipModule, TagModule, TooltipModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input()
  product: Product;

  getDiscountedPrice(price: number) {
    const discountOffer = 50;

    const discountedPrice = (price * discountOffer) / 100;
    return discountedPrice;
  }

  handleFav() {
    this.product.isFav = !this.product.isFav;
  }
  handleAddCart() {
    this.product.isAddedToCart = !this.product.isAddedToCart;
  }
}
