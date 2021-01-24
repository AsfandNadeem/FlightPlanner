import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {BehaviorSubject, Subscription} from 'rxjs';
import {AdminService} from "../../shared/admin.service";



interface City {
  name: string;
  _id: string;
}

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  origins: City[] = [];
  private originSub: Subscription;

  destinations: City[] = [];
  private destinationSub: Subscription;
  form = new FormGroup({
    OriginControl: new FormControl('', Validators.required),
    DestinationControl: new FormControl('', Validators.required),
    CostControl: new FormControl('', Validators.required)
  });
  showSucessMessage: boolean;
  serverErrorMessages: string;
  successMessage : string;

  constructor(public adminService: AdminService) {
  }

  ngOnInit(): void {
    this.adminService.getOrigins();
    this.originSub = this.adminService.getOriginsUpdateListener()
        .subscribe((originData: { origins: City[] }) => {
          this.origins = originData.origins;
        });
  }



  getDestinations(event: any) {
    this.adminService.getDestinations(event._id);
    this.destinationSub = this.adminService.getDestinationsUpdateListener()
        .subscribe((destinationData: { destinations: City[] }) => {
          this.destinations = destinationData.destinations;
        });
  }

  onSaveFlight() {
    if (this.form.invalid) {
      return;
    }
    this.adminService.addFlight(this.form.value.OriginControl._id,
        this.form.value.DestinationControl._id,
        this.form.value.CostControl).subscribe(
        res  => {
          this.showSucessMessage = true;
          //this.successMessage = res.message;
          setTimeout(() => this.showSucessMessage = false, 4000);
          this.form.reset();
        },
        err => {
          this.serverErrorMessages = 'Something went wrong';
        }
    );


  }
}