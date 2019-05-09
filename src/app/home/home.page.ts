import { Component, OnInit } from '@angular/core';
import { IWorker } from '../models/worker.model';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DataGeneratorService } from '../services/data-generator/data-generator.service';
import { WorkerProfileService } from '../services/worker-profile/worker-profile.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 
  workers: IWorker[];
  electricians: IWorker[];
  plumbers: IWorker[];
  tilers: IWorker[];
  builders: IWorker[];
  painters: IWorker[];
  handymen: IWorker[];
  imgs: ['../../assets/1.jpg', '../../assets/2.jpg', '../../assets/3.jpg', '../../assets/4.jpg', '../../assets/5.jpg',
  '../../assets/6.jpg', '../../assets/7.jpg', '../../assets/8.jpg', '../../assets/9.jpg', '../../assets/10.jpg',
  '../../assets/11.jpg', '../../assets/12.jpg', '../../assets/13.jpg', '../../assets/14.jpg', '../../assets/15.jpg',
  '../../assets/16.jpg', '../../assets/17.jpg', '../../assets/18.jpg', '../../assets/19.jpg', '../../assets/20.jpg',
  '../../assets/21.jpg', '../../assets/22.jpg', '../../assets/23.jpg', '../../assets/24.jpg', '../../assets/25.jpg',
  '../../assets/26.jpg', '../../assets/27.jpg', '../../assets/28.jpg', '../../assets/29.jpg', '../../assets/30.jpg'];
  
  constructor(private dataGenerator: DataGeneratorService, private workerService: WorkerProfileService)
  {
    // this.workers = this.dataGenerator.workers;
    this.electricians = this.workerService.electricians;
    this.plumbers = this.workerService.plumbers;
    this.tilers = this.workerService.tilers;
    this.builders = this.workerService.builders;
    this.painters = this.workerService.painters;
    this.handymen = this.workerService.handymen;
  }
}
