import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sub-title',
  templateUrl: './sub-title.component.html',
  styleUrl: './sub-title.component.css',
})
export class SubTitleComponent {
  @Input()
  text: string = '';
}
