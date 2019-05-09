import { Component, OnInit, Input } from '@angular/core';
import { IWorker } from '../models/worker.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { WorkerProfileService } from '../services/worker-profile/worker-profile.service';

@Component({
  selector: 'app-worker-profile',
  templateUrl: './worker-profile.page.html',
  styleUrls: ['./worker-profile.page.scss'],
})
export class WorkerProfilePage implements OnInit {

  @Input() worker: IWorker;
  constructor(private route: ActivatedRoute, private workerService: WorkerProfileService, private location: Location) { }

  ngOnInit() {
    this.getWorker();
  }

  getWorker(): void {
    const id = +this.route.snapshot.paramMap.get('workerId');
    this.workerService.getWorker(id).subscribe(worker => this.worker = worker);
  }

  goBack(): void {
    this.location.back();
  }
}
