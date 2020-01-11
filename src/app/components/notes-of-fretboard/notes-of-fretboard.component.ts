import { Component } from '@angular/core';
import { NotesOfFretboardService } from '../../services/notes-of-fretboard.service';
import { TimeIntervalService } from '../../services/time-intervals.service';

import { NotesOfFretboard } from '../../models/NotesOfFretboard';
import { TimeInterval } from '../../models/TimeInterval';

@Component({
  selector: 'app-notes-of-fretboard',
  templateUrl: './notes-of-fretboard.component.html',
  styleUrls: ['./notes-of-fretboard.component.css']
})
export class NotesOfFretboardComponent {

  audioPath = './assets/notes/';
  audioSuffix = '.mp3';
  buttonText = 'Start';
  isStarted: boolean = false;

  wholeNotesChecked: boolean = false;
  sharpNoteChecked: boolean = false;
  flatNotesChecked: boolean = false;

  notes: NotesOfFretboard[];
  note: string;

  audio;

  interval;
  intervalTime: number = null;
  timeIntervals: TimeInterval[];


  constructor(private notesOfFretboardService: NotesOfFretboardService, private timeIntervalService: TimeIntervalService) { 
    this.timeIntervals = timeIntervalService.getTimeIntervals();
  }

  updateWholeNotesStatus() {
    this.wholeNotesChecked = !this.wholeNotesChecked;
    this.updateList();
  }

  updateSharpNotesStatus() {
    this.sharpNoteChecked = !this.sharpNoteChecked;
    this.updateList();
  }

  updateFlatNotesStatus() {
    this.flatNotesChecked = !this.flatNotesChecked;
    this.updateList();
  }

  updateList() {

    let notes = []

    if(this.wholeNotesChecked) {
      notes = [...notes, ...this.notesOfFretboardService.getWholeNotes()];
    }

    if(this.sharpNoteChecked) {
      notes = [...notes, ...this.notesOfFretboardService.getSharpNotes()];
    }

    if(this.flatNotesChecked) {
      notes = [...notes, ...this.notesOfFretboardService.getFlatNotes()];
    }

    this.notes = notes;
  }

  start() {
    if(!this.isStarted) {
      this.buttonText = 'Stop';
      
      this.chooseNote();
      this.playNoteAudio();
      
      this.interval = setInterval(() => {
        this.chooseNote();
        this.playNoteAudio();
      }, this.intervalTime * 1000)
    } else {
      this.buttonText = 'Start';
      clearInterval(this.interval);
    }
    this.isStarted = !this.isStarted;
  }

  chooseNote() {
    var newNote: string = this.notes[Math.floor(Math.random() * this.notes.length)].name;
    if(newNote == this.note) {
      this.chooseNote();
    } else {
      this.note = newNote;
    }
  }

  playNoteAudio() {
    this.audio = new Audio(this.audioPath + encodeURIComponent(this.note) + this.audioSuffix);
    this.audio.play();
  }
}
