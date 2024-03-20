import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { Product } from '../Models/Product';
import { ProductsListComponent } from '../products-list/products-list.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    RatingModule,
    CommonModule,
    TagModule,
    AccordionModule,
    ButtonModule,
    ChipModule,
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  @Input()
  prodListComponent: ProductsListComponent = undefined;

  product: Product;
  ngOnInit() {
    this.product = this.prodListComponent.selectedProduct;
  }

  handleClose(){
    this.prodListComponent.selectedProduct = undefined
  }

  handleFav() {
    this.product.isFav = !this.product.isFav;
  }

  handleBuyNow() {
    alert('Feature is not available right now!!');
  }

  handleAddToCart() {
    this.product.isAddedToCart = !this.product.isAddedToCart;
  }

  // EMI calculation function at 18% interest rate
  calculateEMI(principal: number, tenureMonths: number): number {
    const annualInterestRate = 18;
    const monthlyInterestRate = (annualInterestRate / 12) / 100;
    const interestMultiplier = Math.pow(1 + monthlyInterestRate, tenureMonths);

    const emi =
      (principal * monthlyInterestRate * interestMultiplier) /
      (interestMultiplier - 1);

    // return Math.ceil(emi);
    return emi;
  }
}
