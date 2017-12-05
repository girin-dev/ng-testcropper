import { Directive } from '@angular/core';
import * as Cropper from 'cropperjs';

@Directive({
  selector: '[appMyCropper]'
})
export class MyCropperDirective {

  @Input('options') options: any = {};
  @Input('src') src: string;
  private cropper;

  constructor(
    private _element: ElementRef,
  ) {
  }

  ngOnInit(): void {
    this._element.nativeElement.src = this.src;
    this.cropper = new Cropper(this._element.nativeElement, this.options);
  }
}
