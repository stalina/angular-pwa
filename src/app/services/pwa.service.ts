import { Injectable } from '@angular/core';
import { SwUpdate, UpdateAvailableEvent } from '@angular/service-worker';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PwaService {

  deferedPromptEvent: any;
  updateObservable: Observable<UpdateAvailableEvent>;

  constructor(private swUpdate: SwUpdate) {

    this.updateObservable = swUpdate.available;

    window.addEventListener('beforeinstallprompt', (event: any) => {
      this.deferedPromptEvent = event;
    });
   }
}
