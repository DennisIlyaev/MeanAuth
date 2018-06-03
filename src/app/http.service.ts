import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('/api/data');
  }

  updateData(data) {
    return this.http.put('/api/update/' + data._id, data);
  }

  deleteData(data) {
    return this.http.delete('/api/delete/' + data._id);
  }

}
