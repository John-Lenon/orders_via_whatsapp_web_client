import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CompanyService } from '../../services/company/company.service';

@Component({
  selector: 'app-company-management',
  templateUrl: './company-management.component.html',
  styleUrls: ['./company-management.component.css'],
})
export class CompanyManagementComponent implements OnInit {
  public backgroundImageCapaUrl: string | undefined;

  constructor(
    public readonly titleService: Title,
    private companyService: CompanyService
  ) {}

  get backgroundImageCapaStyle(): { [key: string]: string } {
    if (this.backgroundImageCapaUrl) {
      return {
        'background-image': `url(${this.backgroundImageCapaUrl})`,
        'background-color': 'none',
      };
    } else {
      return {
        'background-image': 'none',
        'background-color': '#e0e0e0',
      };
    }
  }

  ngOnInit(): void {
    this.getCapaFundo();
  }

  getCapaFundo() {
    this.companyService.getCapaEmpresa().subscribe({
      next: (imageBlob) => {
        if (imageBlob.size > 150) {
          const objectURL = URL.createObjectURL(imageBlob);
          this.backgroundImageCapaUrl = objectURL;
        }
      },
    });
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];

    if (file) {
      this.companyService.uploadCapaEmpresa(file).subscribe({
        next: (success) => {
          if (success) {
            const objectURL = URL.createObjectURL(file);
            this.backgroundImageCapaUrl = objectURL;
          }
        },
      });
    }
  }

  fileInputClick(fileInput: HTMLInputElement): void {
    fileInput.click();
  }
}
