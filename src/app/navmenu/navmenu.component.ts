import { Component, OnInit , Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavmenuComponent implements OnInit {
  @Input() menu;
  @Input() open;
  // @Output() currentUrl: EventEmitter<any> = new EventEmitter<any>();

  constructor() {

   }

  ngOnInit() {

  }

}
