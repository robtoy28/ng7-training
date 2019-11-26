import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  appTitle: string= 'My POC App';
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const firstParam: string = this.route.snapshot.queryParamMap.get('test');
    // console.log('firstparam', firstParam);
       this.route.queryParams.subscribe((params) => {

        //console.log(params.test);

    });
  }

}
