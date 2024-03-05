import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid'
import rrulePlugin from '@fullcalendar/rrule'

const wowEvents = [
    {
        title: "Gnomeregan",
        color: "rgb(46, 204, 113)",
        rrule: {
            freq: 'hourly',
            interval: 72,
            until: '2026-06-01'
          }
    },
    {
        title: "Blackfathom Deeps",
        color: "rgb(155, 89, 182)",
        rrule: {
            freq: 'hourly',
            interval: 72,
            until: '2026-06-01'
          }
    },
    {
        title: "Darkmoon Fair (Alliance)",
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

export default function Calendar(){
    return (
        <div className="w-8/12 bg-neutral-800/50 border border-neutral-600 border-1 rounded-lg p-5">
            <FullCalendar
                plugins={[rrulePlugin, dayGridPlugin]}
                events={wowEvents}
            />
        </div>
    )
}