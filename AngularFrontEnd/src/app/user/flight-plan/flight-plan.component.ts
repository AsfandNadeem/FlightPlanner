import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {City} from "../../shared/city.model";
import {AdminService} from "../../shared/admin.service";

@Component({
  selector: 'app-flight-plan',
  templateUrl: './flight-plan.component.html',
  styleUrls: ['./flight-plan.component.css']
})
export class FlightPlanComponent implements OnInit {
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
  constructor(public adminService: AdminService) { }

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

}
