import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import {
  LoadingController,
  ToastController,
  AlertController
} from "@ionic/angular";
import { DataGeneratorService } from '../services/data-generator/data-generator.service';

@Component({
  selector: "app-book-now",
  templateUrl: "./book-now.page.html",
  styleUrls: ["./book-now.page.scss"]
})
export class BookNowPage implements OnInit {
  isLoading = false;
  todayString: string;
  todayPlusThreeString: string;

  constructor(
    private dataGenerator: DataGeneratorService,
    private router: Router,
    private loadinCtrl: LoadingController,
    private toastController: ToastController,
    private alertController: AlertController
  ) {
    let today = new Date();
    let todayPlusThree = new Date();
    todayPlusThree.setMonth(todayPlusThree.getMonth() + 3);
    this.todayString =
      today.getFullYear() + "-" + today.getMonth() + "-" + today.getDate();
    this.todayPlusThreeString =
      todayPlusThree.getFullYear() +
      "-" +
      todayPlusThree.getMonth() +
      "-" +
      todayPlusThree.getDate();
    console.log(this.todayPlusThreeString + "\n" + this.todayString);
  }

  ngOnInit() {}

  onSubmit(fields: NgForm): void {
    console.log("Submitted");

    if (!fields.valid) {
      alert("Invalid input fields provided");
      return;
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: "Booking Sent",
      message: "Your booking request has been sent.",
      buttons: [
        {
          text: "OK",
          handler: () => {
            this.router.navigateByUrl("/home");
          }
        }
      ]
    });

    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: "Booking Requested.",
      position: "bottom",
      buttons: [
        {
          side: "end",
          text: "Okay",
          handler: () => {
            this.router.navigateByUrl("/home");
          }
        }
      ]
    });
    toast.present();
  }

  onBook() {
    console.log("OnBook");
    this.isLoading = true;
    this.loadinCtrl
      .create({ keyboardClose: true, message: "Requesting Booking..." })
      .then(load => {
        load.present();
        setTimeout(() => {
          this.isLoading = false;
          load.dismiss();
          // this.presentToast();
          this.presentAlert();
        }, 1500);
      });
  }
}