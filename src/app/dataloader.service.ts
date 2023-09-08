import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataloaderService {
  public data: { [id: string] : string; } = {};
  constructor(private http:HttpClient) {}
}
