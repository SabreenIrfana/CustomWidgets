import { Injectable } from '@angular/core';
import { InventoryService, IdentityService } from '@c8y/client';

@Injectable()
export class GpDetailsWidgetService {

  constructor(public inventory: InventoryService,
              public identity: IdentityService) { }

    response: any;
    deviceId: any;

    async getDeviceData(config) {

      // tslint:disable-next-line: prefer-const
      let inventory = await this.inventory.detail(config.device.id);
      // let inventory = await this.inventory.detail("226");
      this.response = inventory.data ;
      console.log('response');
      console.log(this.response);

      
    
      return this.response;
  }

}

