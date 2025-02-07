import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  private apiUrl = 'https://my.api.mockaroo.com/financialTrade?key=a50abc20';

  constructor(private http: HttpClient) {}

  // This method is required by InMemoryDbService
  createDb(): Observable<any> {
    return new Observable((observer) => {
      this.http.get(this.apiUrl).subscribe(
        (data) => {
          observer.next({ financialTrade: data });
          observer.complete();
        },
        (error) => {
          console.error('Error fetching mock data:', error);
          observer.next({ financialTrade: [] }); // Return empty if error
          observer.complete();
        }
      );
    });
  }
}
