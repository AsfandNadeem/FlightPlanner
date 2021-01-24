import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AdminService} from "../../shared/admin.service";
import {Subscription} from "rxjs";

import {City} from "../../shared/city.model";

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  showSucessMessage: boolean;
  serverErrorMessages: string;

    origins: City[] = [];
    private originSub: Subscription;
  constructor(public adminService: AdminService) { }

  ngOnInit(): void {
      this.adminService.getOrigins();
      this.originSub = this.adminService.getOriginsUpdateListener()
          .subscribe((originData: { origins: City[] }) => {
              this.origins = originData.origins;
          });
  }

  addCity(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.adminService.addCity(form.value.cityName, form.value.countryname).subscribe(
        res => {
          this.showSucessMessage = true;
          setTimeout(() => this.showSucessMessage = false, 4000);
          this.adminService.getOrigins();
          this.resetForm(form);
        },
        err => {
            this.serverErrorMessages = 'Something went wrong';
        }
    );
  }

  resetForm(form: NgForm) {
    this.adminService.selectedCity = {
        _id: '',
      name: '',
      country: ''
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }
}
