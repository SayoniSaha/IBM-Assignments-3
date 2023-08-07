import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Department } from './department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private baseURL = "http://localhost:8494/departments/list";
  constructor(private httpClient: HttpClient) { }

  getDepartmentList(): Observable<Department[]> {
    return this.httpClient.get<Department[]>(`${this.baseURL}`);
  }
}
