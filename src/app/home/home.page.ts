import { Component, OnInit } from '@angular/core';
import { IWorker } from '../models/worker.model';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DataGeneratorService } from '../services/data-generator/data-generator.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 
  workers: IWorker[];

  constructor(private dataGenerator: DataGeneratorService)
  {
    this.workers = this.dataGenerator.workers;
  }
}
