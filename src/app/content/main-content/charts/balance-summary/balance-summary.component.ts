import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';

declare const Chart: any;

@Component({
  selector: 'balance-summary',
  templateUrl: './balance-summary.component.html',
  styleUrl: './balance-summary.component.scss'
})
export class BalanceSummaryComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    this.buildChart()
  }

  isCurrencyDropdownOpen: boolean = false;
  activeBalance: string = 'week';

  toggleCurrencyDropdown() {
    this.isCurrencyDropdownOpen = !this.isCurrencyDropdownOpen;
  }

  setActiveBalance(balance: string) {
    this.activeBalance = balance;
    this.updateChartData();
  }

  async getData(selectedOption: any, dataType: any) {
    const response = await fetch("assets/json/data.json");
    const jsonData = await response.json();
    
    if (jsonData[selectedOption]) {
      if (dataType === 'line') {
        return jsonData[selectedOption].lineData;
      } else {
        throw new Error('Invalid dataType');
      }
    } else {
      throw new Error(`Data for selected option "${selectedOption}" not found.`);
    }
  }

  async updateChartData() {
    const line = this.document.querySelector(".card-chart #line") as HTMLCanvasElement;
    if (!line) {
      throw new Error('Canvas element not found');
    }

    const ctx = line.getContext("2d");
    if (!ctx) {
      throw new Error('Canvas context not found');
    }
    
    const lineData = await this.getData(this.activeBalance, 'line'); 

    
    const chart = Chart.getChart(line);
    
    chart.data.labels = lineData.map((item: any) => item.label);
    chart.data.datasets[0].data = lineData.map((item: any) => item.value);
    
    chart.update();
  }

  async buildChart() {
    const line = this.document.querySelector(".card-chart #line") as HTMLCanvasElement; 
    if (!line) {
      throw new Error('Canvas element not found');
    }

    const ctx = line.getContext("2d");
    if (!ctx) {
      throw new Error('Canvas context not found');
    }
    
    const lineData = await this.getData('week', 'line');
    console.log('lineData:', lineData);

    // Встановлюємо точки для всіх значень, окрім останнього, на 0
    const pointRadiusValues = Array(lineData.length - 1).fill(0);
    //pointRadiusValues.push(6);
      

    // Створюємо градієнт
    const gradient = ctx.createLinearGradient( 0, 0, line.height, line.height,);
    gradient.addColorStop(0, '#7354e7'); // Початковий колір
    gradient.addColorStop(1, '#17b1fc'); // Кінцевий колір

    try {
      new Chart(line, {
        type: 'line',
        data: {
          labels: lineData.map((item: any) => item.label),
          datasets: 
          [
            {
              data: lineData.map((item: any) => item.value),
              borderColor: gradient,
              pointBackgroundColor: '#ffffff',
              pointBorderColor: '#17b1fc',
              pointBorderWidth: 4,
              pointRadius: pointRadiusValues,
              pointHitRadius: 5,
              poitBorderWidth: 4,
              borderWidth: 4,
              tension: 0.4,
            },
          ],
        },
        options: {
          elements: {
            elements: {
              point: {
                radius: 0, 
              },
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              position: 'top', 
              grid: {
                display: false
              }
            },
            y: {
              min: 15,
              max: 35,
              ticks: {
                stepSize: 5,
                
              }
            },
          },
        },
      }); 
  
    } catch (error) {
      console.error('Error processing data:', error);
    }
  }

}

