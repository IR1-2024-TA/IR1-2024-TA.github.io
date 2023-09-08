import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public assignment_data_urls: { [id: string] : string; }  = {
    'assignment1-1': 'https://vpariza.github.io/assets/table_data.json',
    'assignment1-2': 'https://vpariza.github.io/assets/table_data.json',
    'assignment2-1': 'https://vpariza.github.io/assets/table_data.json',
    'assignment2-2': 'https://vpariza.github.io/assets/table_data.json',
  };

  constructor() {
  }

  get_tab_names(){
    return Object.keys(this.assignment_data_urls);
  }
}
