import { Component, OnInit } from '@angular/core';
declare var device;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit() {
    document.addEventListener("deviceready", onDeviceReady, false);
        function onDeviceReady() {
           alert(device.platform);
        }
}
  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
