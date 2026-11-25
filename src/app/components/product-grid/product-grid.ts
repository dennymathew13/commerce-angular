import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';

interface Product {
  name: string;
  category: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-product-grid',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-grid.html',
  styleUrl: './product-grid.scss',
})
export class ProductGridComponent {
  readonly products: Product[] = [
    { name: 'Soft Glow Lamp', category: 'Lighting', price: 48, image: 'products/lamp.svg' },
    { name: 'Everyday Tote', category: 'Accessories', price: 36, image: 'products/tote.svg' },
    { name: 'Stoneware Mug', category: 'Kitchen', price: 18, image: 'products/mug.svg' },
    { name: 'Linen Cushion', category: 'Home', price: 32, image: 'products/cushion.svg' },
    { name: 'Desk Companion', category: 'Stationery', price: 24, image: 'products/notebook.svg' },
    { name: 'Scented Candle', category: 'Wellness', price: 22, image: 'products/candle.svg' },
    { name: 'Daily Bottle', category: 'Lifestyle', price: 28, image: 'products/bottle.svg' },
    { name: 'Cozy Throw', category: 'Home', price: 58, image: 'products/throw.svg' },
  ];
}
