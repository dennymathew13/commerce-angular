import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { PromoBannerComponent } from './components/promo-banner/promo-banner';
import { ProductGridComponent } from './components/product-grid/product-grid';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    PromoBannerComponent,
    ProductGridComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
