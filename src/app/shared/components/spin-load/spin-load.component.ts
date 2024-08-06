import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { SpinLoadService } from '../../services/spin-load.service';

@Component({
  selector: 'app-spin-load',
  templateUrl: './spin-load.component.html',
  styleUrl: './spin-load.component.css',
})
export class SpinLoadComponent {
  constructor(public spinLoadService: SpinLoadService) {}

  options: AnimationOptions = {
    path: '../../../../assets/spin restaurant.json',
  };
}
