import { Directive, ElementRef, HostListener } from "@angular/core";
import { NgxMaskService } from 'ngx-mask';
@Directive({
    selector: '[maskToDataInput]'
})
export class MaskToDataInput {

    constructor(private el: ElementRef, private maskService: NgxMaskService) { }

    @HostListener('input', ['$event'])
    onInputChange(event: KeyboardEvent) {
        const input = this.el.nativeElement;
        input.value = this.maskService.applyMask(input.value, '00/00/0000');
    }

}
