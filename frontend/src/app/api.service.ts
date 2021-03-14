import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://127.0.0.1:8000';
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {
  }

  getAllRecognizedObjects(): Observable<any> {
    return this.http.get(this.baseUrl + '/recognizedObject/',
      {headers: this.httpHeaders});
  }

  getOneRecognizedObject(id): Observable<any> {
    return this.http.get(this.baseUrl + '/recognizedObject/' + id + '/',
      {headers: this.httpHeaders});
  }

  updateRecognizedObject(recognizedObject): Observable<any> {
    const body = {
      latitude: recognizedObject.latitude, longitude: recognizedObject.longitude,
      image: recognizedObject.image, description: recognizedObject.description
    };
    return this.http.put(this.baseUrl + '/recognizedObject/' + recognizedObject.id + '/', body,
      {headers: this.httpHeaders});
  }

  createRecognizedObject(recognizedObject): Observable<any> {
    const body = {
      latitude: recognizedObject.latitude, longitude: recognizedObject.longitude,
      image: recognizedObject.image, description: recognizedObject.description
    };
    return this.http.post(this.baseUrl + '/recognizedObject/', body, {headers: this.httpHeaders});
  }

  upload(image: any): Observable<any> {
    const formData = new FormData();
    formData.append('uploadedFile', image.file);
    console.log(image);
    console.log('form is like');
    console.log(formData);
    console.log(formData.get);
    return this.http.post<any>(this.baseUrl + '/saveFile/', formData);
  }

  getPhoto(pictureName): Observable<any> {
    return this.http.get(this.baseUrl + pictureName, {headers: this.httpHeaders});
  }
}
