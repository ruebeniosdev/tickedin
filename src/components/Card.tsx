import future from "@/assets/shatta.jpg";
import { Calendar, MapPin, Clock, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Card = () => {
  return (
    <div className="bg-card rounded-xl border border-border shadow-sm transition hover:shadow-md overflow-hidden">
      {/* Event Image */}
      <div className="relative">
        <img
          src={future}
          alt="Shatta Wale Concert"
          className="w-full h-48 object-cover"
        />
        <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded-md shadow">
          Music
        </span>
      </div>

      {/* Event Info */}
      <div className="p-5 space-y-4">
        {/* Title and Price */}
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-lg font-semibold text-foreground">
              Shatta Wale Concert
            </h2>
            <p className="text-sm text-muted-foreground">
              Join Ghana’s biggest dancehall star live at the Accra Sports
              Stadium!
            </p>
          </div>
          <div className="text-right">
            <span className="text-sm font-bold text-emerald-800">GHS 150</span>
          </div>
        </div>

        {/* Event Details */}
        <div className="space-y-1 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>Sat, Aug 17 • 7:00 PM</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Accra Sports Stadium, Accra</span>
          </div>
          <div className="flex items-center gap-2">
            <Ticket className="w-4 h-4" />
            <span>Only 23 tickets left!</span>
          </div>
        </div>

        {/* Stimulation Message */}
        <div className="text-xs text-orange-600 font-medium">
          🔥 5 people are viewing this event now
        </div>

        {/* Ticket Reservation Box */}
        <div className="bg-muted p-3 rounded-lg border border-border space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4 text-yellow-500" />
            <p className="text-xs text-muted-foreground leading-snug">
              A ticket has been temporarily reserved in your name. To confirm
              your spot, please complete your purchase before the countdown
              ends. If you don’t, the ticket will be released back to the
              public.
            </p>
          </div>
          <div className="flex flex-col gap-2 pt-2">
            <Button variant="outline" className="w-full">
              🎫 Purchase Ticket Now
            </Button>
            <Button variant="destructive" className="w-full">
              ✖ Release My Reservation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
