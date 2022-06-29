import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonImportModule } from './common-import.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, CommonImportModule],
  exports: [CommonImportModule],
})
export class CoreModule {}
