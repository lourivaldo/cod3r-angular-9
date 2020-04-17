import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpClient} from "@angular/common/http";
import {Product} from "./product.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://localhost:3001';

  constructor(private http: HttpClient,
              private snackBar: MatSnackBar) { }

  showMessage(msg: string) {
    this.snackBar.open(msg, 'x', {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top"
    })
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.baseUrl}/products`, product)
  }

  read(): Observable<Product[]> {
      return this.http.get<Product[]>(`${this.baseUrl}/products`)
  }

  readById(id: string): Observable<Product> {
     return this.http.get<Product>(`${this.baseUrl}/products/${id}`)
  }

  update(product: Product): Observable<Product> {
      return this.http.put<Product>(`${this.baseUrl}/products/${product.id}`, product)
  }

  delete(id: number): Observable<Product> {
      return this.http.delete<Product>(`${this.baseUrl}/products/${id}`)
  }
}
