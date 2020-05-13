import { Component} from '@angular/core';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent {
  note: string = '';
  notes : Array<string> = [];
   addNote(){
     if(this.note != '' && this.note.replace(/\s/g, '').length>0)
       this.notes.push(this.note);
     this.note = '';
   }
   deleteNote(noteToBeDeleted: string){
     const indexOfTheNote = this.notes.indexOf(noteToBeDeleted);
     this.notes.splice(indexOfTheNote,1); 
   }



}
