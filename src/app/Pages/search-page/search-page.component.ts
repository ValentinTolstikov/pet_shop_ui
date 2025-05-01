import {Component, Input} from '@angular/core';
import {ActivatedRoute, Params, Router, RouterOutlet} from '@angular/router';
import {routes} from '../../app.routes';

@Component({
  selector: 'app-search-page',
  imports: [],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent {
   @Input("member") member : string = "";

   constructor (private router : Router, private fb : ActivatedRoute) {
     fb.params.subscribe(params => {this.member = params["member"];});
     if (this.member == "")
       router.navigateByUrl('/error');
   }
}
