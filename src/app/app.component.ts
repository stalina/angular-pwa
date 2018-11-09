import { PwaService } from './services/pwa.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  showUpdate = false;

  constructor(private pwa: PwaService) {}

  ngOnInit() {
    this.pwa.swUpdate.available.subscribe(event => {
      this.showUpdate = true;
    });
  }

  reload() {
    this.pwa.swUpdate.activateUpdate().then(() => document.location.reload());
  }
}
