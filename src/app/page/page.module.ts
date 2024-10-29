import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagePageRoutingModule } from './page-routing.module';

import { PagePage } from './page.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagePageRoutingModule,CommonModule,ComponentsModule
  ],
  declarations: [PagePage]
})
export class PagePageModule {}
