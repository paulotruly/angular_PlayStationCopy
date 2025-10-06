import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.html',
  styleUrl: './banner.css'
})
export class Banner {
    @Input() imgLink: string = '';
    @Input() imgLogo: string = '';
    @Input () imgExtra: string = '';
    @Input () title: string = '';
    @Input () description: string = '';
    @Input () buttonText: string = '';
}
