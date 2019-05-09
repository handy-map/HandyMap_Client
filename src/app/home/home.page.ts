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
  electricians: IWorker[] = [{
    id: 1, name: 'Liam', surname: 'Smith', email: '', password: '', phoneNumber: '', skills: ['Electrician'], rating: 4.7,category: ''
  },
  {
    id: 2, name: 'Noah', surname: 'Johnson', email: '', password: '', phoneNumber: '', skills: ['Electrician'], rating: 4.3, category: ''
  },
  {
    id: 3, name: 'William', surname: 'Williams', email: '', password: '', phoneNumber: '', skills: ['Electrician'], rating: 3.8, category: ''
  },
  {
    id: 4, name: 'James', surname: 'Jones', email: '', password: '', phoneNumber: '', skills: ['Electrician'], rating: 4.4, category: ''
  },
  {
    id: 5, name: 'Logan', surname: 'Brown', email: '', password: '', phoneNumber: '', skills: ['Electrician'], rating: 4.85, category: ''
  }];
  plumbers: IWorker[] = [{
    id: 6, name: 'Benjamin', surname: 'Davis', email: '', password: '', phoneNumber: '', skills: ['Plumber'], rating: 4.12,category: ''
  },
  {
    id: 7, name: 'Mason', surname: 'Miller', email: '', password: '', phoneNumber: '', skills: ['Plumber'], rating: 4.3, category: ''
  },
  {
    id: 8, name: 'Elijah', surname: 'Wilson', email: '', password: '', phoneNumber: '', skills: ['Plumber'], rating: 4.0, category: ''
  },
  {
    id: 9, name: 'Oliver', surname: 'Moore', email: '', password: '', phoneNumber: '', skills: ['Plumber'], rating: 3.9, category: ''
  },
  {
    id: 10, name: 'Jacob', surname: 'Taylor', email: '', password: '', phoneNumber: '', skills: ['Plumber'], rating: 4.72, category: ''
  }];
  tilers: IWorker[] = [{
    id: 11, name: 'Lucas', surname: 'Anderson', email: '', password: '', phoneNumber: '', skills: ['Tiler'], rating: 4.44,category: ''
  },
  {
    id: 12, name: 'Michael', surname: 'Thomas', email: '', password: '', phoneNumber: '', skills: ['Tiler'], rating: 4.1, category: ''
  },
  {
    id: 13, name: 'Alexander', surname: 'Jackson', email: '', password: '', phoneNumber: '', skills: ['Tiler'], rating: 4.6, category: ''
  },
  {
    id: 14, name: 'Ethan', surname: 'White', email: '', password: '', phoneNumber: '', skills: ['Tiler'], rating: 3.85, category: ''
  },
  {
    id: 15, name: 'Daniel', surname: 'Harris', email: '', password: '', phoneNumber: '', skills: ['Tiler'], rating: 3.9, category: ''
  }];
  builders: IWorker[] = [{
    id: 16, name: 'Matthew', surname: 'Martin', email: '', password: '', phoneNumber: '', skills: ['Builder'], rating: 4.7,category: ''
  },
  {
    id: 17, name: 'Aiden', surname: 'Thompson', email: '', password: '', phoneNumber: '', skills: ['Builder'], rating: 4.31, category: ''
  },
  {
    id: 18, name: 'Henry', surname: 'Garcia', email: '', password: '', phoneNumber: '', skills: ['Builder'], rating: 4.32, category: ''
  },
  {
    id: 19, name: 'Joseph', surname: 'Martinez', email: '', password: '', phoneNumber: '', skills: ['Builder'], rating: 4.4, category: ''
  },
  {
    id: 20, name: 'Jackson', surname: 'Robinson', email: '', password: '', phoneNumber: '', skills: ['Builder'], rating: 4.1, category: ''
  }];
  painters: IWorker[] = [{
    id: 21, name: 'Samuel', surname: 'Clark', email: '', password: '', phoneNumber: '', skills: ['Painter'], rating: 4.5,category: ''
  },
  {
    id: 22, name: 'Sebastian', surname: 'Rodriguez', email: '', password: '', phoneNumber: '', skills: ['Painter'], rating: 4.1, category: ''
  },
  {
    id: 23, name: 'David', surname: 'Lewis', email: '', password: '', phoneNumber: '', skills: ['Painter'], rating: 4.95, category: ''
  },
  {
    id: 24, name: 'Carter', surname: 'E4S', email: '', password: '', phoneNumber: '', skills: ['Painter'], rating: 4.25, category: ''
  },
  {
    id: 25, name: 'Wyatt', surname: 'Lee', email: '', password: '', phoneNumber: '', skills: ['Painter'], rating: 3.85, category: ''
  }];
  handymen: IWorker[] = [{
    id: 26, name: 'Jayden', surname: 'Walker', email: '', password: '', phoneNumber: '', skills: ['Handyman'], rating: 4.3,category: ''
  },
  {
    id: 27, name: 'John', surname: 'Hall', email: '', password: '', phoneNumber: '', skills: ['Handyman'], rating: 4.3, category: ''
  },
  {
    id: 28, name: 'Owen', surname: 'Allen', email: '', password: '', phoneNumber: '', skills: ['Handyman'], rating: 4.7, category: ''
  },
  {
    id: 29, name: 'Dylan', surname: 'Young', email: '', password: '', phoneNumber: '', skills: ['Handyman'], rating: 4.45, category: ''
  },
  {
    id: 30, name: 'Luke', surname: 'Hernandez', email: '', password: '', phoneNumber: '', skills: ['Handyman'], rating: 4.6, category: ''
  }];

  constructor(private dataGenerator: DataGeneratorService)
  {
    this.workers = this.dataGenerator.workers;
  }
}
