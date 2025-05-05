import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpServiceService } from './http-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements HttpInterceptor {
  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (localStorage.getItem('fname') && localStorage.getItem('token')) {
      req = req.clone({
        setHeaders: {
          "withCredentials": "true",
          "name": "Sawan",
          Authorization: localStorage.getItem('token')
        }
      })
    }
    console.log(req.headers.get("Authorization") + "------------------->>>")
    return next.handle(req).pipe(

      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          localStorage.clear();
          this.router.navigate(['/login'], {queryParams: { errorMessage: error.error },} );         
         }

        if (error.status === 403) {
          localStorage.clear();
          this.router.navigate(['/login'],{ queryParams: { errorMessage: 'Token is expired... plz login again..!!' }, });
         }

         
        return throwError(error);
      }),
              // Use the map operator to modify the response
                map((event: HttpEvent<any>) => {
                  // Check if the event is an HTTP response
                  if (event instanceof HttpResponse) {
                    // Modify the response data
                    const modifiedData = event.body; // Modify as needed
                   console.log('modified data====>>>',modifiedData);
                    // Create a new event with the modified data
                    const modifiedEvent = event.clone({ body: modifiedData });
          
                    // Return the modified event
                    return modifiedEvent;
                  }
                  // If it's not an HTTP response, return the original event
                  return event;
                })
    );
  }
}
