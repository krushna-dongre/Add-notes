import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-notes-list-item',
  templateUrl: './notes-list-item.component.html',
  styleUrls: ['./notes-list-item.component.css']
})
export class NotesListItemComponent  {
  @Input() note : string; 
  @Output() noteDeleted : EventEmitter<string> = new EventEmitter<string>();

  handleNoteDeleted(){
    this.noteDeleted.emit(this.note);
  }
  

}
