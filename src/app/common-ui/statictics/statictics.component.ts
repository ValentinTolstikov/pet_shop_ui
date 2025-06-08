import {Component, OnInit, ViewChild} from '@angular/core';
import {ChartComponent} from 'ng-apexcharts';
import {AdminService} from '../../Data/Services/admin.service';
import {ProductStatisticResponse} from '../../Data/Interfaces/ApiResponses/ProductStatisticResponse';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-statictics',
  imports: [
    ChartComponent
  ],
  templateUrl: './statictics.component.html',
  styleUrl: './statictics.component.css'
})
export class StaticticsComponent implements OnInit {
  @ViewChild("Chart") chart: ChartComponent | any;
  public chartOptions: Partial<ChartOptions> | any;
  public products: ProductStatisticResponse[] = [];

  ngOnInit() {
    //this.updateChart();
  }

  constructor(private admService: AdminService) {
    this.chartOptions = {
      series: [
      ],
      chart: {
        type: "donut",
      },
      labels: [],
      responsive: [
        {
          breakpoint: 980,
          options: {
            chart: {
              width: 400
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };

    this.updateChart();
  }

  private updateChart() {
    this.admService.getProductsStats().then(r => r.subscribe(p=>this.products=p).add(() => {
      this.products.sort((a, b) => {
        if (a.countOutOfStock>b.countOutOfStock)
          return -1;

        if (a.countOutOfStock<b.countOutOfStock)
          return 1;

        return 0;
      })

      let pts = this.products.slice(0, 5).map(p=>p.countOutOfStock);

      this.chartOptions.labels = this.products.slice(0, 5).map(p=>p.productName);

      this.chartOptions.series = pts;
    }));
  }
}
