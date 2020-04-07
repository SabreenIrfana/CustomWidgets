import { Component, OnInit, Input } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { GpDetailsWidgetService} from './gp-google-direction-map.service';
import {DatePipe} from '@angular/common';
import { InventoryService, IdentityService } from '@c8y/client';

@Component({
  selector: 'lib-gp-list-devices-from-group',
  templateUrl: './gp-google-direction-map.component.html',
  styleUrls: ['gp-google-direction-map.component.css']
})



export class GpGoogleDiectionMapComponent implements OnInit {
  mapType = 'satellite';
  zoom = 14;
  @Input() config;
  location: Location;
  response: any;
  constructor(
    private datePipe: DatePipe,
    private device: GpDetailsWidgetService,
    public inventory: InventoryService,
    public identity: IdentityService,
    ) { }

  async ngOnInit() {
    console.log('config');
    console.log(this.config);

    let x = await this.device.getDeviceData(this.config);
    this.response = x;
    let longitude = this.response.c8y_Position.lng;
    let latitude = this.response.c8y_Position.lat;
}

}