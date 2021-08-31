import { Product } from './product';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from './category';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DEALS } from './mock-deal';
import { Deal } from './deal';

@Injectable({
  providedIn: 'root'
})
export class ProductService { 
  constructor(private httpClient: HttpClient) { }

  private categoryRestUrl='http://localhost:3000/api/categories';
  private productRestUrl ='http://localhost:3000/api/products';
  private httpOptions={
    headers: new HttpHeaders({'Content-Type': 'application/json' }) 
  };

  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.categoryRestUrl, this.httpOptions);
  }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.productRestUrl, this.httpOptions);
  }

  getCategorizedProducts(product_category_id:number): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.categoryRestUrl +'/'+product_category_id, this.httpOptions);
  }

  getDeals(): Observable<Deal[]> {
    const deals=of(DEALS);
    return deals;
  }

  // private httpErrorHandler(error: HttpErrorResponse) {
  //   if(error.error instanceof ErrorEvent) {
  //     console.error('A client side error occurs. The error message is '+ error.message);
  //   }
  //   else {
  //     console.error('An error happended in server. The HTTP status code is '+error.status+' and the error returned is '+error.message);
  //   }
  //   return throwError('Error occured. Please try again');
  // }

  // addProduct(product: Product): Observable<Product> {
  //   return this.httpClient.post<Product>(this.productRestUrl, product, this.httpOptions)
  //   .pipe(retry(3), catchError(this.httpErrorHandler));
  // }

  // updateProduct(product:Product): Observable<Product> {
  //   return this.httpClient.put<Product>(this.productRestUrl+ '/' +product.productId, product, this.httpOptions)
  //   .pipe(retry(3), catchError(this.httpErrorHandler));
  // }

  // deleteProduct(product:Product | number): Observable<Product> {
  //   const productId=typeof product=='number'?product:product.productId
  //   const url=`${this.productRestUrl}/${productId}`;
  //   return this.httpClient.delete<Product>(url, this.httpOptions)
  //   .pipe(retry(3), catchError(this.httpErrorHandler));
  // }

  
}
