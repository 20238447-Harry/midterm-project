import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { ProductService } from '../../Services/product.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-prod-lists',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './prod-lists.component.html',
  styleUrls: ['./prod-lists.component.css']
})
export class ProdListsComponent implements OnInit {

  products: Product[] = [];
  returnUrl: string | null = null;
  searchPlaceholder: string = 'Search by name, category, brand...';
  selectedId: number | null = null;
  searchTerm: string = '';

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  getProduct(p: Product): void {
    this.selectedId = p.id;
    this.router.navigate(['/products', p.id]);
  }

  getFilteredProducts(): Product[] {
    if (!this.searchTerm) return this.products;

    const term = this.searchTerm.toLowerCase();

    return this.products.filter(p =>
      p.name.toLowerCase().includes(term) ||
      p.category.toLowerCase().includes(term) ||
      p.brand.toLowerCase().includes(term)
    );
  }

}