import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { range, random } from 'lodash';

import { lineChart, Point2D, Point3D } from './chart';
import { areaChart, barChart} from './chart_overview';


// const values: Point2D[][] = range(5,20).map(x => [{ x, y: Math.pow(x,0.5) }, { x, y: x + random(1) }]);
// const series: string[] = ['s1', 's2'];
const data_values: Point3D[]= [
  { 'x': 1, 'y': 1, 'series': 's1' },
  { 'x': 2, 'y': 4, 'series': 's1' },
  { 'x': 4, 'y': 16, 'series': 's1' },
  { 'x': 6, 'y': 36, 'series': 's1' },
  { 'x': 8, 'y': 50, 'series': 's1' },
  { 'x': 10, 'y': 66, 'series': 's1' },
  { 'x': 1, 'y': 1, 'series': 's2' },
  { 'x': 2, 'y': 2, 'series': 's2' },
  { 'x': 4, 'y': 4, 'series': 's2' }, 
  { 'x': 6, 'y': 36, 'series': 's2' },
  { 'x': 9, 'y': 70, 'series': 's2' },
  { 'x': 10, 'y': 66, 'series': 's2' }]

const data = { values:data_values} 
// window.addEventListener('resize', event => console.warn('RESIZE:L', event));

@Component({
  selector: 'app-vega-chart',
  templateUrl: './vega-chart.component.html',
  styleUrls: ['./vega-chart.component.scss']
})
export class VegaChartComponent implements AfterViewInit {

  @ViewChild('lineGraph', { static: true }) lineGraph: ElementRef;
  @ViewChild('areaGraph', { static: true }) areaGraph: ElementRef;
  @ViewChild('barGraph', { static: true }) barGraph: ElementRef;
  ngAfterViewInit() {
    lineChart(this.lineGraph.nativeElement, data); // { values, series }
    areaChart(this.areaGraph.nativeElement, data); // { values, series }
    barChart(this.barGraph.nativeElement, data); // { values, series }
  }

}
