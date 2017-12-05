import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <input type="file" (change)="readUrl($event)">
    <img *ngFor="let u of dataUrl" appMyCropper [options]="cropperOptions" [src]="u"/>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
  dataUrl: any[] = [];

  cropperOptions: any = {
    minContainerWidth: 400,
    minContainerHeight: 300,
    aspectRatio: 16 / 9,
    crop: function (e) {
      console.log(e.detail.x);
      console.log(e.detail.y);
      console.log(e.detail.width);
      console.log(e.detail.height);
      console.log(e.detail.rotate);
      console.log(e.detail.scaleX);
      console.log(e.detail.scaleY);
    }
  };

  readUrl($event) {
    if ($event.target.files.length > 0) {
      const reader = new FileReader();
      const that = this;
      reader.onload = (loadEvent: any) => {
        that.dataUrl.push(loadEvent.target.result);
      }
      reader.readAsDataURL($event.target.files[0]);
    }
  }
}
