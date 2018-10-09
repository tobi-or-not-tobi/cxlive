import { Component, Output, EventEmitter } from '@angular/core';
import { SpeechRecognitionService } from './speech.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-speech',
  templateUrl: './speech.component.html',
  styleUrls: ['./speech.component.scss']
})
export class SpeechComponent {
  @Output()
  query: EventEmitter<any> = new EventEmitter();
  constructor(private speechRecognitionService: SpeechRecognitionService, private router: Router) {}

  talk() {
    this.speechRecognitionService.record().subscribe(value => {
      this.launchSearchPage(value);
    });
  }

  launchSearchPage(query: string) {
    this.query.emit(query);
    // this.router.navigate(['/search', query]);
  }
}
