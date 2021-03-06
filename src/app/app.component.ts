import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {OAuthService, JwksValidationHandler} from 'angular-oauth2-oidc';
import { authCodeFlowConfig} from './sso.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng7-training';
  orderObj: any;
  name: any;
  constructor(
    private route: ActivatedRoute,
    private oauthService: OAuthService
    ) {
      this.configureSingleSignon();
    }



  

  configureSingleSignon = () => {
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }


  ngOnInit() {
    const firstParam: string = this.route.snapshot.queryParamMap.get('test');
    // console.log('param is ', firstParam);
    this.route.queryParamMap.subscribe(params => {
      this.name = params.get('test');
      if (this.name) { console.log('i got it', this.name); }
    });



    // this.route.queryParams.subscribe((params) => {

    //     console.log(params.test);

    // });

    //   this.route.queryParamMap.subscribe(queryParams => {
    //   this.name = queryParams.get("test");
    //   console.log('option3', this.name);
    // })
  }

}
