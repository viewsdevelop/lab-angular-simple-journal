import { Component, OnInit } from '@angular/core';

// Line of code to set up this "journal-entries" component to
// use the JournalEntriesService that we created.
import { JournalEntriesService } from "../shared/services/journal-entries.service"; 

@Component({
  selector: 'app-journal-entries',
  templateUrl: './journal-entries.component.html',
  styleUrls: ['./journal-entries.component.css'],

  // What are we accomplishing with this line of code?
  providers: [ JournalEntriesService ]
})
export class JournalEntriesComponent implements OnInit {

  // Are we defining an empty Array Object for Entries?
  entries: Object[]

  // Are we defining the structure of an individual entry?
  // Additionally, are we indicating with the '' that these
  // entries will initially have empty title / content?
  entry: { title: string, content: string } = { title: '', content: '' }

  // What are we accomplishing with this line of code?
  constructor(private entriesService: JournalEntriesService) { } 


  // With this function, are we basically saying that once we
  // initialize the application, we should call the "getEntries"
  // method in the JournalEntriesService in order to generate
  // a list of all entries?
  ngOnInit() {
    this.entriesService.getEntries()
    .then( (res) => {
      this.entries = res;
    })
  }

}
