import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AdminService} from "../../shared/admin.service";
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
  }

  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.adminService.login(form.value.email, form.value.password);
  }
}
