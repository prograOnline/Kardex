import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'users',
  providers: [
    
  ],
  /**
   * Our list of styles in our component. We may add more to compose many styles together.
   */
  styleUrls: [ './users.component.css' ],
  /**
   * Every Angular template is first compiled by the browser before Angular runs it's compiler.
   */
  templateUrl: './users.component.html'
})

export class UsersComponent implements OnInit {
  public name:string = 'Componete usuarios';
  
  constructor(
    
  ) {}

  public ngOnInit() {
    console.log('hello `Users` component');
  }
}
