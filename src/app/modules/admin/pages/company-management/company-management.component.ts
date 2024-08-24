import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-company-management',
  templateUrl: './company-management.component.html',
  styleUrls: ['./company-management.component.css'],
})
export class CompanyManagementComponent implements OnInit {
  constructor(public readonly titleService: Title) {}

  ngOnInit() {}
}
