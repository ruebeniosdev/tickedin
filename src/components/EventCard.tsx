import future from "@/assets/shatta.jpg";
import { Calendar, MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";
// import { Button } from "./ui/button";

export const EventCard = () => {
  return (
    <Link to="/event-detail">
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
        <div className="p-5 space-y-2">
          <h2 className="text-lg font-semibold text-foreground">
            Shatta Wale Concert
          </h2>
          <p className="text-sm text-muted-foreground">
            Join Ghana’s biggest dancehall star live in Accra Sports Stadium!
          </p>

          {/* Date & Location */}
          <div className="flex items-center text-sm text-muted-foreground gap-2 mt-2">
            <Calendar className="w-4 h-4" />
            <span>Sat, Aug 17 • 7:00 PM</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground gap-2">
            <MapPin className="w-4 h-4" />
            <span>Accra Sports Stadium, Accra</span>
          </div>

          {/* Call-to-action */}
          {/* <Link to="/event-detail">
          <Button>View Details →</Button>
        </Link> */}
        </div>
      </div>
    </Link>
  );
};
