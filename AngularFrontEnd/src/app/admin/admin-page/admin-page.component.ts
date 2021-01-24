import {Component, OnDestroy, OnInit} from '@angular/core';
import {AdminService} from "../../shared/admin.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit , OnDestroy {

  isadminauthenticated = false;
  showcities = false;
  showflights = false;
  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit() {
    if (this.adminService.getisAdmin()) {
      this.showcities = true;
      this.showflights = false;
      this.isadminauthenticated = true;
    } else {
      this.isadminauthenticated = false;
      this.router.navigate(['/admin']).then();
    }
  }

  onCity() {
    this.showcities = true;
    this.showflights = false;
  }

  onFlight() {
    this.showcities = false;
    this.showflights = true;
  }

  onLogout() {
    this.isadminauthenticated = false;
    this.adminService.logoutAdmin();
  }

  ngOnDestroy() {
    this.isadminauthenticated = false;
  }



}