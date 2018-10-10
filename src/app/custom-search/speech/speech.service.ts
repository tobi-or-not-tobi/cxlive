import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
// import * as _ from 'lodash';

interface IWindow extends Window {
  webkitSpeechRecognition: any;
  SpeechRecognition: any;
}

@Injectable({
  providedIn: 'root'
})
export class SpeechRecognitionService {
  speechRecognition: any;

  constructor(private zone: NgZone) {}

  record(): Observable<string> {
    return Observable.create(observer => {
      const { webkitSpeechRecognition }: IWindow = <IWindow>window;
      this.speechRecognition = new webkitSpeechRecognition();
      //this.speechRecognition = SpeechRecognition;
      this.speechRecognition.continuous = false;
      //this.speechRecognition.interimResults = true;
      this.speechRecognition.lang = 'en-us';
      this.speechRecognition.maxAlternatives = 1;

      this.speechRecognition.onresult = speech => {
        let term: string = '';
        if (speech.results) {
          var result = speech.results[speech.resultIndex];
          var transcript = result[0].transcript;
          if (result.isFinal) {
            if (result[0].confidence < 0.3) {
              // console.log('Unrecognized result - Please try again');
            } else {
              // console.log(transcript);
              // term = _.trim(transcript);
              term = transcript;
              // console.log('Did you said? -> ' + term + ' , If not then say something else...');
            }
          }
        }
        this.zone.run(() => {
          observer.next(term);
        });
      };

      this.speechRecognition.onerror = error => {
        observer.error(error);
      };

      this.speechRecognition.onend = () => {
        observer.complete();
      };

      this.speechRecognition.start();
    });
  }

  DestroySpeechObject() {
    if (this.speechRecognition) this.speechRecognition.stop();
  }
}
