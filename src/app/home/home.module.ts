import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './components';
import { HomeComponent } from './containers';
import { HomeRouting } from './home-routing';

@NgModule({
  declarations: [HomeComponent, HeaderComponent],
  imports: [CommonModule, HomeRouting],
})
export class HomeModule {}
