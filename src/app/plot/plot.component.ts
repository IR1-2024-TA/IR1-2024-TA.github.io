import { Component, Input, ViewChild } from '@angular/core';
import { AgChartOptions } from 'ag-charts-community';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-plot',
  templateUrl: './plot.component.html',
  styleUrls: ['./plot.component.scss'],
  providers: [HttpClient]
})
export class PlotComponent {
  @Input() dataUrl: string = '';

  isVisible$ = new BehaviorSubject(true);

  destroyAndReload() {
    this.isVisible$.next(false);
    setTimeout(() => {
        this.isVisible$.next(true);
    }, 1);
}

  public options: AgChartOptions;
  attributes: string[] = [];
  dataEntries: any[] = [];

  @ViewChild('hplot') hplot: any;

  selectedAttribute: string = "";
  
  selectedAttributeControl = new FormControl(this.selectedAttribute);

  constructor(private http:HttpClient) {
    this.options = {}
  }

  update_options(data_key:string, xAxis:string='', yAxis:string=''){
    let data = [];
    if(this.dataEntries.length > 0) {
      for(let entry of this.dataEntries){
        let new_entry: { [id: string] : string; } = {};
        new_entry[data_key] = entry[data_key];
        data.push(new_entry);
      }
      data = this.dataEntries;
    }
    if(typeof this.dataEntries[0][data_key] != "number"){
      return;
    }
    this.options = {
      title: {
        text: 'Distribution for ' + xAxis,
      },
      data: data,
      series: [
        {
          type: 'histogram',
          xKey: data_key,
          xName: xAxis,
        },
      ],
      axes: [
        {
          type: 'number',
          position: 'bottom',
          title: { text: xAxis },
          tick: { interval: 2 },
        },
        {
          type: 'number',
          position: 'left',
          title: { text: yAxis},
        },
      ],
    };
  }

  get_attributes(){
    return this.attributes;
  }

  load_plot(){
    // Assign the data to the data source for the table to render
    this.getJSON().subscribe(data => {
      this.dataEntries = data;
      this.attributes = this.getHeaders();
      var attribute = this.attributes[0]
      if(this.selectedAttribute.length > 0){
        attribute = this.selectedAttribute
      }
      this.update_options(attribute, attribute, 'Distribution of counts');
      this.destroyAndReload();
    });
  }

public getJSON(): Observable<any> {
  return this.http.get(this.dataUrl);
}

getHeaders() {
  let headers: string[] = [];
  if (this.dataEntries) {
    this.dataEntries.forEach((value) => {
      Object.keys(value).forEach((key) => {
        if (!headers.find((header) => header == key)) {
          headers.push(key);
        }
      });
    });
  }
  return headers;
}

  ngOnInit(){
    this.load_plot()
  }

  onSelectionChange(selectedAttribute:string){
    this.selectedAttribute = selectedAttribute
    this.load_plot();
  }
}
