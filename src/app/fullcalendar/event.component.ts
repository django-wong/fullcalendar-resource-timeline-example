import {Component, HostListener, Input} from "@angular/core";

@Component({
  selector: 'app-fullcalendar-event',
  template: `
    @if (expand) {
<!--      <button nz-button nzType="primary" nzSize="small">&lt;</button>-->
    }
    <img class="team-avatar" src="https://placehold.co/80" />
    <span>{{event.title}}</span>

    @if (expand) {
<!--      <button nz-button nzType="primary" nzSize="small">&gt;</button>-->
    }
  `,
  styles: [
    `
      :host {
        border-radius: 4px;
        padding-left: 4px;
        padding-right: 4px;
        height: 25px;
        display: flex;
        justify-items: center;
        align-items: center;
        gap: 4px;
        .team-avatar {
          width: 20px;
          height: 20px;
          border-radius: 100%;
        }
        span {
          flex: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    `
  ]
})
export class EventComponent {
  @Input() event: any;

  expand = false;

  @HostListener('mouseenter')
  onHover() {
    this.expand = true;
  }

  @HostListener('mouseleave')
  onLeave() {
    this.expand = false;
  }
}
