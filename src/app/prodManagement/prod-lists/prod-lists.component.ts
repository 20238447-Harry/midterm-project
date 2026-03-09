import { CommonModule} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product.interface';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-prod-lists',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './prod-lists.component.html',
  styleUrls: ['./prod-lists.component.css']
})
export class ProdListsComponent implements OnInit {

  products: Product[] = [];
  searchTerm: string = '';
  selectedID: number | null = null;
  searchPlaceholder: string = "Search by ProductID, Name, or category...";

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  getProduct(p: Product): void {
    this.selectedID = p.id;
    this.router.navigate(['/product', p.id]);
  }

  get filteredProducts(): Product[] {
    const term = this.searchTerm.toLowerCase();
    return this.products.filter(p =>
      p.name.toLowerCase().includes(term) ||
      p.id.toString().includes(term) ||
      p.category.toLowerCase().includes(term)
    );
  }
}