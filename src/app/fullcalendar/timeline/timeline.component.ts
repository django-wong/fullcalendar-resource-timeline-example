import { Component } from '@angular/core';
import {CalendarOptions, EventSourceFuncArg} from "@fullcalendar/core";
import dayGridPlugin from '@fullcalendar/daygrid';
import {FullCalendarModule} from "@fullcalendar/angular";
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import {faker} from "@faker-js/faker";
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [
    FullCalendarModule
  ],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.less'
})
export class TimelineComponent {
  calendarOptions: CalendarOptions = {
    events: async function (option: EventSourceFuncArg) {

      return new Array(1000).fill(1).map((_, index) => {
        const resourceId = Math.floor(Math.random() * 400) + 1;

        const date = faker.date.between({
          from: option.start,
          to: option.end
        });

        const end = new Date(date);

        end.setHours(date.getHours() + faker.number.int({min: 1, max:3}));

        const locked = index % 20 === 0;

        return {
          display: locked ? 'background' : undefined,
          extendedProps: {},
          start: date,
          end: end,
          date: date,
          allDay: false,
          id: index.toString(),
          resourceId: resourceId.toString(),
          title: locked ? '' : faker.word.words(3),
          color: locked ? 'red' : undefined,
          interactive: true,
        };
      });
    },
    initialView: 'resourceTimeline',
    plugins: [
      resourceTimelinePlugin, dayGridPlugin, interactionPlugin
    ],
    editable: true,
    resourceGroupField: 'venue_id',
    resources: (new Array(400)).fill(1).map((_, index) => {
      const venueId = Math.floor(index / 5);
      return {
        id: index.toString(),
        title: `Field ${index + 1}`,
        venue_id: venueId,
        venueTitle: `Venue ${venueId + 1}`
      };
    })
  };
}
