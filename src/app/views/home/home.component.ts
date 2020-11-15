import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { ContentType } from 'src/app/models/content-type.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectedContentType: ContentType;

  fContentType = ContentType;

  constructor() {
    this.selectedContentType = ContentType.MOVIE;
  }

  ngOnInit(): void {
  }

  public changeTab(contentType: ContentType): void {
    this.selectedContentType = contentType;
  }
}
