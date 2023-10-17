import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { compass } from 'compass';
import { RegisterPlugin } from '@capacitor/core/types/definitions';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  heading: number | void = 0;
  heading2?: number;
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(){
    this.test();
    compass.addListener("compassUpdate", (ret) => {
      this.heading2 = ret.heading;
      console.log("This is heading2 val: " + this.heading2);
      this.cdr.detectChanges();
    }
    )
  }

  async test(){
    
   this.heading = await compass.getHeading()
   .then((r) => {
    if (r != undefined)
     return r.heading;

     return undefined;
   })
   .catch((e) => {
     console.log(e);
   });

   console.log("This is heading" + this.heading);
   
  }

  
  
}
