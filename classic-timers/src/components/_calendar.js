import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid'
import rrulePlugin from '@fullcalendar/rrule'
import timeGridPlugin from '@fullcalendar/timegrid';
import React, { useEffect, useRef } from 'react';
import { Calendar } from "@fullcalendar/core";
import {isMobile} from 'react-device-detect';
import listPlugin from '@fullcalendar/list'

const wowEvents = [
    {
        title: "Gnomeregan",
        color: "rgb(46, 204, 113)",
        rrule: {
            freq: 'hourly',
            interval: 72,
            until: '2026-06-01',
            dtstart: '20230305'
          },
    },
    {
        title: "Blackfathom Deeps",
        color: "rgb(155, 89, 182)",
        rrule: {
            freq: 'hourly',
            interval: 72,
            until: '2026-06-01',
            dtstart: '20230305'
          }
    },
    {
        title: "Darkmoon Faire (Alliance)",
        color: "rgb(41, 128, 185)",
        rrule: {
            freq: 'weekly',
            interval: 4,
            until: '2026-06-01',
            dtstart: '2024-03-11', // will also accept '20120201T103000'
          },
        duration: {days: 6}
    }
]

const RaidCalendar = () => {
    const calendarRef = useRef(null);

    useEffect(() => {
      const calendarEl = calendarRef.current;
      const calendar = new Calendar(calendarEl, {
        plugins: [rrulePlugin, dayGridPlugin, listPlugin],
        initialView: 'dayGridMonth', // Initial view can be adjusted as per requirement
        events: wowEvents,
        contentHeight: 'auto',
      });

      if (isMobile)
      {
        calendar.changeView('listWeek');
      }
      else
      {
        calendar.changeView('dayGridMonth');
      }

      function handleWindowResize() {
        if (window.innerWidth > 924) {
          calendar.changeView('dayGridMonth');
        } else {
          calendar.changeView('listWeek');
        }
      }
  
      window.addEventListener('resize', handleWindowResize);

      calendar.render();
  
      return () => {
        calendar.destroy();
        window.removeEventListener('resize', handleWindowResize);
      };
    }, []);
  
    return (<>
        <div className="sm:w-full md:w-8/12 sm:h-full bg-neutral-800/50 border border-neutral-600 border-1 rounded-lg p-5 text-white">
            <div ref={calendarRef} />
        </div>
    </>)
}

export default RaidCalendar;