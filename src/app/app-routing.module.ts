import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { StrategyComponent } from './strategy/strategy.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { ChartsComponent } from './charts/charts.component';
import { VegaChartComponent } from './vega-chart/vega-chart.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'strategy', component: StrategyComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'charts', component: ChartsComponent }, 
  { path: 'vega-charts', component: VegaChartComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
     ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
