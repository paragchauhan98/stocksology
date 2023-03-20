import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BacktestingComponent } from './backtesting/backtesting.component';

const routes: Routes = [
  { path: 'backtesting', component: BacktestingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
