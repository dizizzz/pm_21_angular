import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit  } from '@angular/core';

declare const Chart: any;

@Component({
  selector: 'expense-categories',
  templateUrl: './expense-categories.component.html',
  styleUrl: './expense-categories.component.scss'
})
export class ExpenseCategoriesComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    this.buildChart()
  }

  isCurrencyDropdownOpen: boolean = false;
  activeCategory: string = 'week';

  toggleCurrencyDropdown() {
    this.isCurrencyDropdownOpen = !this.isCurrencyDropdownOpen;
  }
  
  setActiveCategory(category: string) {
    this.activeCategory = category;
  }

  async getData(selectedOption: any, dataType: any) {
    const response = await fetch("assets/json/data.json");
    const jsonData = await response.json();
    
    if (jsonData[selectedOption]) {
      if (dataType === 'doughnut') {
        return jsonData[selectedOption].doughnutData;
      } else {
        throw new Error('Invalid dataType');
      }
    } else {
      throw new Error(`Data for selected option "${selectedOption}" not found.`);
    }
  }

  async buildChart() {
    const doughnut = this.document.querySelector(".card-chart #doughnut") as HTMLCanvasElement; // Cast to HTMLCanvasElement
    
    const doughnutData = await this.getData('week', 'doughnut');
    console.log('doughnut:', doughnutData);

    const customColors = [
      '#56bf64',
      '#363636',
      '#c5b4a0',
      '#6e86f0',
      '#f2cd30',
      '#ff5385',
      '#a077b6',
    ];
      
    try {
      new Chart(doughnut, {
        type: 'doughnut',
        data: {
          labels: doughnutData.map((item: any) => item.label),
          datasets: [{
            data: doughnutData.map((item: any) => item.value),
            backgroundColor: customColors,
            borderWidth: 0,
          }],
        },
        options: {
          plugins: {
            legend: {
              display: false,
            },
          },
          cutout: 95,
        },
      });
    } catch (error) {
      console.error('Error processing data:', error);
    }
  }

}
