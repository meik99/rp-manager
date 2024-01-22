import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {debounceTime, fromEvent, throttleTime} from "rxjs";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @ViewChild("sidebar")
  sidebar: ElementRef | null = null;

  constructor() { }

  ngOnInit(): void {
    fromEvent(window, "resize")
      .subscribe(() => this.setHeight())
    fromEvent(window, "load")
      .subscribe(() => this.setHeight())
  }

  style(): any {
    const height = window.visualViewport.height;

    return {
      "height.px": height,
      "min-height.px": height,
      "max-height.px": height
    };
  }

  private setHeight() {
    const height = window.visualViewport.height;

    this.sidebar?.nativeElement.setAttribute(
      "style",
      `height: ${height}px; min-height: ${height}px; max- height: ${height}px;`
    );
  }
}
