import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public assignment_data_urls: { [id: string] : string; }  = {
    'assignment1-1': 'https://ir1-2024-ta.github.io/assets/assignment1_1.json',
    'assignment1-2': 'https://ir1-2024-ta.github.io/assets/assignment1_2.json',
    'assignment2-1': 'https://ir1-2024-ta.github.io/assets/assignment2_1.json',
    'assignment2-2': 'https://ir1-2024-ta.github.io/assets/assignment2_2.json',
  };

  constructor() {
  }

  get_tab_names(){
    return Object.keys(this.assignment_data_urls);
  }
}
