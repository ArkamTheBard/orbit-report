import { Component } from '@angular/core';
import { bindCallback } from 'rxjs';
import { Satellite } from './satellite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-repo';
  sourceList : Satellite[];
  displayList : Satellite[];

  spaceDebrisArr : Satellite[] = [];



  constructor() {
    this.sourceList = [];
    let satelliteUrl = 'https://handlers.education.launchcode.org/static/satellites.json';

    const getSatellite = async() =>{
      try{
        const res = await fetch(satelliteUrl);

        const data = await res.json();

        let fetchedSatellites = data.satellites;

        for(let i = 0; i < fetchedSatellites.length; ++i){
          let tempSatellite = new Satellite(fetchedSatellites[i].name, fetchedSatellites[i].type, fetchedSatellites[i].launchDate, fetchedSatellites[i].orbitType, fetchedSatellites[i].operational);
          this.sourceList.push(tempSatellite);
        }
        this.displayList = this.sourceList.slice(0);
      }
      catch(e){
        console.error("Something went wrong during fetch")
      }
    }



//     this.sourceList = [
//        new Satellite("SiriusXM", "Communication", "2009-03-21", "LOW", true),
//        new Satellite("Cat Scanner", "Imaging", "2012-01-05", "LOW", true),
//        new Satellite("Weber Grill", "Space Debris", "1996-03-25", "HIGH", false),
//        new Satellite("GPS 938", "Positioning", "2001-11-01", "HIGH", true),
//        new Satellite("ISS", "Space Station", "1998-11-20", "LOW", true),
//     ];
    getSatellite();
  }

  search(searchTerm: string): void {
    let matchingSatellites: Satellite[] = [];
    searchTerm = searchTerm.toLowerCase();
    for(let i=0; i < this.sourceList.length; i++) {
       let name = this.sourceList[i].name.toLowerCase();
       let orbit = this.sourceList[i].orbitType.toLowerCase();
       let type = this.sourceList[i].type.toLowerCase();
       if (name.indexOf(searchTerm) >= 0 || orbit.indexOf(searchTerm) >= 0 || type.indexOf(searchTerm) >= 0) {
          matchingSatellites.push(this.sourceList[i]);
       }
    }
    // assign this.displayList to be the array of matching satellites
    // this will cause Angular to re-make the table, but now only containing matches
    this.displayList = matchingSatellites;
 }

}
