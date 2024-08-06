import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { SpinLoadComponent } from 'src/app/shared/components/spin-load/spin-load.component';
import { AlertService } from 'src/app/shared/services/alert.service';
import { SpinLoadService } from 'src/app/shared/services/spin-load.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    public spinLoadService: SpinLoadService,
    public alertService: AlertService
  ) {
    this.spinLoadService.enableSpinLoad = true;
  }

  ngOnInit(): void {
    this.spinLoadService.enableSpinLoad = false;
  }
}
