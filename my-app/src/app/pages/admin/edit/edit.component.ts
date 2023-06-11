import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { IProduct } from '../../../interfaces/products';
import { MessageService } from 'primeng/api';
import { CloudinaryService } from 'src/app/services/cloudinary.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { ICategory } from 'src/app/interfaces/category';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [MessageService, CloudinaryService],
})
export class EditComponent {
  categorys!: ICategory[];
  productForm!: FormGroup;
  submitted = false;
  files: File[] = [];
  imageUrls: string[] = [];
  showProgressBar: boolean = false;
  value: number = 0;
  id!: number | string;
  product!: IProduct;
  constructor(
    private productService: ProductsService,
    private router: Router,
    private messageService: MessageService,
    private cloudinaryUpload: CloudinaryService,
    private route: ActivatedRoute,
    private ct: CategoriesService
  ) {
    this.productForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      desc: new FormControl('', [Validators.required]),

      sale_offer: new FormControl(0),
      categoryId: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required]),
    });
    this.route.paramMap.subscribe((param) => {
      this.id = param.get('id')!;
      this.productService.getproduct(this.id).subscribe((data: any) => {
        // Sản phẩm dựa theo ID
        this.product = data.product;
        console.log(this.product);

        this.productForm.patchValue(this.product);
      });
    });
  }
  ngOnInit() {
    this.ct.getCategories().subscribe((data: any) => {
      this.categorys = data.categories;
      console.log(data.categories);
    });
    let interval = setInterval(() => {
      this.value = this.value + Math.floor(Math.random() * 10) + 1;
      if (this.value >= 50) {
        this.value = 100;
        this.messageService.add({
          severity: 'info',
          summary: 'Success',
          detail: 'Image Upload Successfully',
        });
        clearInterval(interval);
      }
    }, 2000);
  }
  //file image

  onSelect(event: any) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
  onSubmit() {
    this.uploadFile().then(() => {
      this.onHandleSubmit();
    });
  }

  uploadFile(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (this.files.length === 0) {
        alert('Vui lòng chọn các tệp ảnh');
        resolve();
        return;
      }
      this.showProgressBar = true;

      const uploadPromises: Promise<any>[] = [];

      for (const file of this.files) {
        const data = new FormData();
        data.append('file', file);
        data.append('upload_preset', 'uploadCellphones');
        data.append('cloud_name', 'dwb9qumu6');

        const uploadPromise = this.cloudinaryUpload
          .uploadImage(data)
          .toPromise();
        uploadPromises.push(uploadPromise);
      }

      Promise.all(uploadPromises)
        .then((results) => {
          this.imageUrls = results.map((result) => result.secure_url);
          console.log('imageUrls', this.imageUrls);
          resolve();
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  }

  onHandleSubmit() {
    this.submitted = true;
    const formData = { ...this.productForm.value };
    // Tùy chỉnh giá trị trong formData
    formData.image = this.imageUrls;
    if (this.productForm.valid) {
      console.log(formData);
      // Gọi phương thức đăng ký từ ProductService
      this.productService.editProduct(this.id, formData).subscribe(
        (response) => {
          // Xử lý phản hồi từ API khi đăng ký thành công
          this.router.navigate(['/admin/dashboard']);
          console.log('Sửa Thành công', response);
        },
        (error) => {
          // Xử lý lỗi từ API khi đăng ký thất bại
          console.log('Sửa Thành thất bại', error);
        }
      );
    }
  }
}
