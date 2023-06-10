import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductsService } from 'src/app/services/products.service';
import { ICategory } from '../../../interfaces/category';
import { IFormProduct, IProduct } from 'src/app/interfaces/products';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [MessageService],
})
export class AddComponent {
  constructor(
    private ps: ProductsService,
    private fb: FormBuilder,
    private cs: CategoriesService,
    private messageService: MessageService,
    private router: Router
  ) {
    this.cs.getCategories().subscribe(({ categories }) => {
      this.categories = categories;
      console.log(categories);
    });
  }

  categories!: ICategory[];
  addForm = this.fb.group({
    name: [''],
    price: [0],
    price_sale: [0],
    sale_offer: [0],
    desc: [''],
    isNew: true,
    isInvistable: true,
    isFavorite: false,
    quantity: [0],
    categoryId: [''],
  });
  show() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Message Content',
    });
  }
  onHandleSubmit() {
    const product: IFormProduct = {
      name: this.addForm.value.name || '',
      price: this.addForm.value.price || 0,
      price_sale: this.addForm.value.price_sale || 0,
      sale_offer: this.addForm.value.sale_offer || 0,
      categoryId: this.addForm.value.categoryId || '',
      quantity: this.addForm.value.quantity || 0,
      desc: this.addForm.value.desc || '',
    };
    this.ps.addproduct(product).subscribe(() => {
      // this.router.navigate(['dashboard']);
      this.show();
    });
  }
}
