import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestAntdComponent } from './test-antd.component';

const routes: Routes = [{ path: '', component: TestAntdComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestAntdRoutingModule { }
