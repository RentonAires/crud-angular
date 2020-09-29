import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private headreService: HeaderService) { }

  ngOnInit(): void {
  }

  get title(): string {
    return this.headreService.headerData.title
  }

  get icon(): string {
    return this.headreService.headerData.icon
  }

  get routeUrl(): string {
    return this.headreService.headerData.routeUrl
  }

}
