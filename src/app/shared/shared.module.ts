import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HTTP_INTERCEPTORS, JsonpInterceptor } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [CommonModule, ReactiveFormsModule],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<void> {
    return {
      ngModule: SharedModule,
      providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JsonpInterceptor, multi: true },
        // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
      ],
    };
  }
}
