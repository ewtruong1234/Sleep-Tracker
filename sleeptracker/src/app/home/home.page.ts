import { Component } from '@angular/core';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { AlertController } from '@ionic/angular';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // View Logged Data
  loggedData: any[] = [];

  // Log Overnight Sleep
  sleepStartTime: string = new Date().toISOString(); // Initialize timezone to UTC (global standard)
  sleepEndTime: string = new Date().toISOString();

  // Log Sleepiness During the Day
  sleepinessLevel: number = 0;
  sleepinessTime: string = new Date().toISOString(); // Initialize timezone to UTC (global standard)

  // Used for alerts/error prevention and loading data
  constructor(private alertController: AlertController) {
    this.loadLoggedData();
  }

  async logOvernightSleep() {
    // Convert sleep start and end times back to Date objects
    var startTime = new Date(this.sleepStartTime);
    var endTime = new Date(this.sleepEndTime);

    // Calculate the difference in milliseconds
    var start_ms = startTime.getTime();
    var end_ms = endTime.getTime();
    var difference_ms = end_ms - start_ms;

    // Display alert to prevent user from selecting invalid sleep duration
    if (difference_ms <= 0) {
      var alert = await this.alertController.create({
        header: 'Select Valid Times',
        message: 'Please select valid start and end times before logging.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    // Create instance of OvernightSleepData with start and end times
    var overnightSleepData = new OvernightSleepData(startTime, endTime);

    // Log overnight sleep data
    var lis = [];
    lis.push("Overnight Sleep");
    lis.push(overnightSleepData);
    this.loggedData.push(lis);
    // console.log(overnightSleepData); //id, loggedAt, summaryString, dateString, sleepStart, sleepEnd

    // Saves logged data array to storage
    await this.saveLoggedData();
  }

  async logSleepiness() {
    // Display alert to prevent user from selecting no sleepiness level
    if (this.sleepinessLevel == 0) {
      var alert = await this.alertController.create({
        header: 'Select Sleepiness Level',
        message: 'Please select a sleepiness level before logging.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    // Convert sleepinessTime back to Date object
    var reportedTime = new Date(this.sleepinessTime);

    // Create new instance of StanfordSleepinessData with selected sleepiness level and time
    var sleepinessData = new StanfordSleepinessData(this.sleepinessLevel, reportedTime);

    // Log sleepiness data
    var lis = [];
    lis.push("Sleepiness");
    lis.push(sleepinessData);
    this.loggedData.push(lis);
    // console.log(sleepinessData); //id, loggedAt, summaryString, dateString, loggedValue

    // Saves logged data array to storage
    await this.saveLoggedData();
  }

  // Save loggedData array to storage
  async saveLoggedData() {
    await Storage.set({ key: 'loggedData', value: JSON.stringify(this.loggedData) });
  }

  // Load loggedData array from storage
  async loadLoggedData() {
    const { value } = await Storage.get({ key: 'loggedData' });
    if (value) {
      this.loggedData = JSON.parse(value);
    }
  }

  // Remove certain data in loggedData
  removeLoggedData(data: SleepData) {
    var index = this.loggedData.indexOf(data);
    this.loggedData.splice(index, 1);

    // Saves logged data array to storage
    this.saveLoggedData();
  }
}
