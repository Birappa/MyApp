import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../core/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchFlightForm:FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) { }

  ngOnInit() {

  }

  onSubmit() {

    const searchFlight = {
      source: this.searchFlightForm.controls.source.value,
      destination: this.searchFlightForm.controls.destination.value
    }
    this.apiService.login(searchFlight).subscribe(data => {
      debugger;
      if(data.status === 200) {
       
        this.router.navigate(['/flight-details']);
      
      }else {
    
        alert(data.message);
      }
    });
   
  }

}
