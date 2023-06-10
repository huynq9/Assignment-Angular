import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { IProduct } from 'src/app/interfaces/products';
import { CategoriesService } from 'src/app/services/categories.service';

import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [MessageService, ConfirmationService],
})
export class DashboardComponent implements OnInit {
  @ViewChild('fileInput') fileInput!: ElementRef;
  productDialog!: boolean;

  products!: IProduct[];
  selectedImages: File[] = [];
  previewUrls: string[] = [];
  product!: any;

  selectedProduct!: any;

  submitted!: boolean;
  categories!: any[];
  statuses!: any[];

  constructor(
    private ps: ProductsService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,

    private ct: CategoriesService
  ) {}

  ngOnInit() {
    this.ps
      .getproducts()
      .subscribe(({ products }) => (this.products = products));
    this.statuses = [
      { label: 'INSTOCK', value: 'instock' },
      { label: 'LOWSTOCK', value: 'lowstock' },
      { label: 'OUTOFSTOCK', value: 'outofstock' },
    ];
  }

  openNew() {
    this.product = {};
    this.submitted = false;
    this.productDialog = true;
  }

  deleteSelectedProducts() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.products = this.products.filter(
          (val) => !this.selectedProduct.includes(val)
        );
        this.selectedProduct = null;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Products Deleted',
          life: 3000,
        });
      },
    });
  }

  editProduct(product: IProduct) {
    this.product = { ...product };
    this.productDialog = true;
  }

  deleteProduct(product: IProduct) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + product.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.ps.removeProduct(product._id).subscribe(() => {
          this.products = this.products.filter(
            (val: any) => val._id !== product._id
          );
        });
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Product Deleted',
          life: 3000,
        });
      },
    });
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  saveProduct() {
    this.submitted = true;

    if (this.product.name.trim()) {
      if (this.product._id) {
        this.products[this.findIndexById(this.product._id)] = this.product;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Product Updated',
          life: 3000,
        });
      } else {
        this.product._id = this.createId();
        this.product.image = 'product-placeholder.svg';

        this.products.push(this.product);

        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Product Created',
          life: 3000,
        });
      }

      this.products = [...this.products];
      this.productDialog = false;
      this.product = {};
    }
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i]._id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  createId(): string {
    let id = '';
    var chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }

  // sadsadasdsad
  // getName(id: any): any {
  //   this.ct.getCategory(id).subscribe(({ cate }) => {
  //     return cate.name;
  //   });
  // }
  // getSeverity(status: string) {
  //   switch (status) {
  //     case 'INSTOCK':
  //       return 'success';
  //     case 'LOWSTOCK':
  //       return 'warning';
  //     case 'OUTOFSTOCK':
  //       return 'danger';
  //   }
  // }
}
