import { EventCard } from "@/components/EventCard";
import { CalendarDays } from "lucide-react";

export const EventList = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
        <div className="text-center md:text-left w-full md:w-auto">
          <h1 className="text-3xl font-bold text-foreground">
            Upcoming Events
          </h1>
          <p className="mt-2 text-muted-foreground">
            Browse & book tickets for upcoming events
          </p>
        </div>

        <div className="w-full md:w-auto">
          <div className="bg-card px-4 py-2 rounded-lg shadow-sm border border-border flex items-center justify-center md:justify-start gap-2 text-muted-foreground">
            <CalendarDays className="w-5 h-5" />
            <span className="font-medium">20 Upcoming Events</span>
          </div>
        </div>
      </div>

      {/* Event Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
         {Array.from({ length: 21 }).map((_, i) => (
          <EventCard key={i} />
        ))}
      </div>
    </section>
  );
};
