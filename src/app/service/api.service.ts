import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi = "http://localhost:3000/";
  constructor(private http: HttpClient) { }

  public getData(): Observable<any>{
    return this.http.get<any>(this.urlApi+ "integrantes/");
  }
  public getDataById(id:any): Observable<any>{
    return this.http.get<any>(this.urlApi+ "integrantes/"+id);
  }

  deleteUser (id :any){
    return this.http.delete(this.urlApi + "integrantes/"+id);
  }

  public postUser(userData: any): Promise<string> {
    return this.http.post(this.urlApi + "integrantes/", userData).toPromise()
      .then((res: any) => {
        if (res.id) {
          return "OK";
        } else {
          return res.message;
        }
      })
      .catch((error) => {
        console.error('Error en la solicitud:', error);
        return "Error en la solicitud";
      });
  }
  public updateUser(userData: any): Promise<string> {
    return this.http.put(this.urlApi + "integrantes/"+ userData.id, userData).toPromise()
      .then((res: any) => {
        if (res.id) {
          return "OK";
        } else {
          return res.message;
        }
      })
      .catch((error) => {
        console.error('Error en la solicitud:', error);
        return "Error en la solicitud";
      });
  }

 

  
}
