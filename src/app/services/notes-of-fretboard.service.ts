import { Injectable } from '@angular/core';

import { NotesOfFretboard } from '../models/NotesOfFretboard';

@Injectable({
  providedIn: 'root'
})
export class NotesOfFretboardService {

  constructor() { }

  getWholeNotes(): NotesOfFretboard[] {
    return [
      {
        name: 'A'
      },
      {
        name: 'B'
      },
      {
        name: 'C'
      },
      {
        name: 'D'
      },
      {
        name: 'E'
      },
      {
        name: 'F'
      },
      {
        name: 'G'
      }
    ]
  }

  getSharpNotes(): NotesOfFretboard[] {
    return [
      {
        name: 'A#'
      },
      {
        name: 'C#'
      },
      {
        name: 'D#'
      },
      {
        name: 'F#'
      },
      {
        name: 'G#'
      }
    ]
  }

  getFlatNotes(): NotesOfFretboard[] {
    return [
      {
        name: 'Ab'
      },
      {
        name: 'Bb'
      },
      {
        name: 'Db'
      },
      {
        name: 'Eb'
      },
      {
        name: 'Gb'
      }
    ]
  }

}
