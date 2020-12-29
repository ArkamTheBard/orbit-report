import { ɵELEMENT_PROBE_PROVIDERS__POST_R3__ } from "@angular/platform-browser";

export class Satellite {

    constructor(name : string, type : string, launchDate : string, orbitType : string, operational : boolean)
    {
        this.name = name;
        this.type = type;
        this.launchDate = launchDate;
        this.orbitType = orbitType;
        this.operational = operational;
    }

    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;

    shouldShowWarning() : boolean{
        if(this.type === "Space Debris"){
            return true;
        }
        else{
            return false;
        }
    }


}
