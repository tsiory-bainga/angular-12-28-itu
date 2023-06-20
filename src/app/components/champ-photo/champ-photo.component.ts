import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-champ-photo',
  templateUrl: './champ-photo.component.html',
  styleUrls: ['./champ-photo.component.scss']
})
export class ChampPhotoComponent {
  @Input() src : string = '';
  @Input() titre : string = '';
  @Input() utilisation : string = '';

  @Output() fileSelected: EventEmitter<FileList> = new EventEmitter<FileList>();

  onFileChange(event: Event): void {
    debugger;
    const inputElement = event.target as HTMLInputElement;
    const files = inputElement.files;
    if(files != null)
      this.fileSelected.emit(files);
  }
}
