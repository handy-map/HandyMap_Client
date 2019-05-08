import { Component, OnInit, Input } from '@angular/core';
import { DataGeneratorService } from 'src/app/services/data-generator/data-generator.service';
import { NgForm } from '@angular/forms';
import { IWorker } from 'src/app/models/worker.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  password: string;
  skills: string[];

  @Input() worker: IWorker;
  constructor(private dataGenerator: DataGeneratorService) { }

  ngOnInit() {
  }

  getCategories(): string[] {
    return this.dataGenerator.categories;
  }

  catSelected(values) {
    console.log(values.detail.value);
  }

  onSubmit(fields: NgForm): void {
    console.log('Submitted');

    if (!fields.valid) {
      alert('Invalid input fields provided');
      return;
    }

    const worker = new IWorker();
    worker.name = fields.value.name;
    worker.surname = fields.value.surname;
    worker.email = fields.value.email;
    worker.password = fields.value.password;
    worker.skills = this.skills;
    worker.phoneNumber = fields.value.phone;

    const jsonObject = JSON.stringify(worker);
    console.log('Sending Request body: ' + jsonObject);

    
  }
}
