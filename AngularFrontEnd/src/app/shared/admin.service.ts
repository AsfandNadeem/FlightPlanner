import { Injectable } from '@angular/core';

import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from 'rxjs/operators';
import { Subject } from 'rxjs';


import { environment } from '../../environments/environment';
import {City} from "./city.model";


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  isadmin = false;

  private origins: City [] = [];
  private originsUpdated = new Subject<{origins: City[], maxCities: number}>();
  private destinations: City [] = [];
  private destinationsUpdated = new Subject<{destinations: City[], maxCities: number}>();
  constructor(private http: HttpClient, private router: Router) { }
    selectedCity: City = {
      _id: '',
        name: '',
        country: '',
    };

  login(userName: string, password: string) {
    this.http.post<{message: string}>(
        environment.apiBaseUrl+'/admin/login',
        {userName, password})
        .subscribe( response => {
           this.isadmin = true;
          this.router.navigate(['/adminpage']).then();
        } , error => {
          console.log('invalid admin');
            this.isadmin = false;
          this.router.navigate(['/admin']).then();
        });

  }

  addCity(name: string, country: string)
  {
      console.log(name + '' + country);
      return this.http.post(environment.apiBaseUrl+'/admin/city',
          {name, country});
  }

    addFlight(origin: string, destination: string, cost: number)
    {
        console.log(origin + '' + destination + '' + cost);
        return this.http.post(environment.apiBaseUrl+'/admin/addflight',
            {origin, destination, cost});
    }

    getOrigins() {
        this.http
            .get<{message: string, cities: any, maxCities: number}>(
                environment.apiBaseUrl+'/admin/getOrigin'
            )
            .pipe(map((originData) => {
                return { origins: originData.cities.map((origin: { name: any; _id: any; }) => {
                        return {
                            name: origin.name,
                            _id: origin._id,
                        };
                    }), maxCities: originData.maxCities  };
            }))// change rterieving data
            .subscribe(transformedOriginsData => {
                this.origins = transformedOriginsData.origins;
                this.originsUpdated.next({
                    origins: [...this.origins],
                        maxCities: transformedOriginsData.maxCities
                    }
                );
            });
    }

    getOriginsUpdateListener() {
        return this.originsUpdated.asObservable();
    }

    getDestinations(id: string) {
      console.log(id);
        this.http
            .get<{message: string, cities: any, maxCities: number}>(
                environment.apiBaseUrl+'/admin/getDestination/'+ id
            )
            .pipe(map((destinationData) => {
                return { destinations: destinationData.cities.map((destination: { name: any; _id: any; }) => {
                        return {
                            name: destination.name,
                            _id: destination._id,
                        };
                    }), maxCities: destinationData.maxCities  };
            }))// change rterieving data
            .subscribe(transformedDestinationsData => {
                this.destinations = transformedDestinationsData.destinations;
                this.destinationsUpdated.next({
                    destinations: [...this.destinations],
                        maxCities: transformedDestinationsData.maxCities
                    }
                );
            });
    }

    getDestinationsUpdateListener() {
        return this.destinationsUpdated.asObservable();
    }


    getisAdmin() {
        return this.isadmin;
    }


    logoutAdmin() {
        this.isadmin = false;
        this.router.navigate(['/admin']);
    }

}
