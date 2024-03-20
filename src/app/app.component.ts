import {AfterViewInit, Component, Directive, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    ProductsListComponent,
    FooterComponent,
    ProductDetailsComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ekart';
  searchText: string = '';
  
  handleSearchText(event: any) {
    this.searchText = event;
  }
  // @viewChild(ProductsListComponent) productListComp: ProductsListComponent
  @ViewChild(ProductsListComponent) prodListComp: ProductsListComponent;

  // ngAfterViewInit() {
  //   // child is set
  // }

}
