import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

  @Input() satellites: Satellite[];

  spaceDebrisArr : Satellite[] = [];
  communicationArr : Satellite[] = [];
  probeArr : Satellite[] = [];
  positioningArr : Satellite[] = [];
  spaceStationArr : Satellite[] = [];
  telescopeArr : Satellite[] = [];

  constructor() {}

  ngOnInit() {
  }

  ngOnChanges(){
    if(this.satellites !== undefined){
      this.findTotals();
      this.total = this.satellites.length;
      this.spaceDebris = this.spaceDebrisArr.length;
      this.communication = this.communicationArr.length;
      this.probe = this.probeArr.length;
      this.positioning = this.positioningArr.length;
      this.spaceStation = this.spaceStationArr.length;
      this.telescope = this.telescopeArr.length;
      this.spaceDebrisArr  = [];
      this.communicationArr  = [];
      this.probeArr  = [];
      this.positioningArr  = [];
      this.spaceStationArr  = [];
      this.telescopeArr  = [];
    }
  }

  total : number = 0;
  spaceDebris : number = 0;
  communication : number = 0;
  probe : number = 0;
  positioning : number = 0;
  spaceStation : number = 0;
  telescope : number = 0;

  findTotals() : void{
    for(let satellite of this.satellites){
      if(satellite.type === "Space Debris"){
        this.spaceDebrisArr.push(satellite);
      }
      else if(satellite.type === "Communication"){
        this.communicationArr.push(satellite);
      }
      else if(satellite.type === "Probe"){
        this.probeArr.push(satellite);
      }
      else if(satellite.type === "Positioning"){
        this.positioningArr.push(satellite);
      }
      else if(satellite.type === "Space Station"){
        this.spaceStationArr.push(satellite);
      }
      else if(satellite.type == "Telescope"){
        this.telescopeArr.push(satellite);
      }
    }
  }

}