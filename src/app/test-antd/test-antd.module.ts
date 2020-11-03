import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestAntdRoutingModule } from './test-antd-routing.module';
import { TestAntdComponent } from './test-antd.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';


import { IconsProviderModule } from '../icons-provider.module';

@NgModule({
  declarations: [TestAntdComponent],
  imports: [
    TestAntdRoutingModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzFormModule,
    HttpClientModule,
    FormsModule,
    IconsProviderModule
  ]
})
export class TestAntdModule { }
