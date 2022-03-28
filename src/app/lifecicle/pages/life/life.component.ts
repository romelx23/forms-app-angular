import {
  Component,
  OnInit,
} from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styles: [],
})
export class LifeComponent implements OnInit
{
  mostrar:boolean=true;
  constructor() {
    
  }

  ngOnInit(): void {
    
  }
}
