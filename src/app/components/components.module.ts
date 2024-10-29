import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { KeyUpdatesComponent } from './key-updates/key-updates.component';
import { StatusComponent } from './status/status.component';


@NgModule({
  declarations: [KeyUpdatesComponent,StatusComponent],
  imports: [
    CommonModule,IonicModule,FormsModule
  ],
  exports:[KeyUpdatesComponent,StatusComponent]
})
export class ComponentsModule { }
