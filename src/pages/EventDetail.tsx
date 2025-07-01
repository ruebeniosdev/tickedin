import { CalendarDays, MapPin, Ticket, Info, ArrowLeft } from "lucide-react";
import eventImage from "@/assets/shatta.jpg";
import { Card } from "@/components/Card";
import { Link } from "@tanstack/react-router"; // adjust import if you're using react-router-dom
import { Button } from "@/components/ui/button";

export const EventDetail = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
      {/* Back Button */}
      <div>
        <Link to="/">
          <Button variant="outline" className="flex items-center gap-2 text-sm">
            <ArrowLeft className="w-4 h-4" />
            Back to Events
          </Button>
        </Link>
      </div>

      {/* Event Banner */}
      <div className="bg-card rounded-xl shadow-sm w-full overflow-hidden">
        <div className="aspect-[21/9] relative w-full">
          <img
            src={eventImage}
            alt="Event"
            className="w-full h-72 sm:h-96 object-cover object-center"
          />
        </div>

        {/* Event details */}
        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold mb-4 text-foreground">
                  Shatta Wale Live Concert
                </h1>
                <p className="text-lg text-muted-foreground">
                  Experience an electrifying night with Shatta Wale at the Accra Sports Stadium. Join thousands of fans for an unforgettable concert full of music, energy, lights, and excitement. Don’t miss out on Ghana’s biggest live show!
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {/* Date */}
                <div className="bg-muted p-4 rounded-lg border border-gray-100">
                  <div className="flex items-center text-muted-foreground mb-1">
                    <CalendarDays className="w-5 h-5 mr-2" />
                    <span className="text-sm font-medium">Date</span>
                  </div>
                  <p className="text-muted-foreground">Saturday, October 12, 2025</p>
                </div>

                {/* Location */}
                <div className="bg-muted p-4 rounded-lg border border-gray-100">
                  <div className="flex items-center text-muted-foreground mb-1">
                    <MapPin className="w-5 h-5 mr-2 text-primary" />
                    <span className="text-sm font-medium">Location</span>
                  </div>
                  <p className="text-muted-foreground">Accra Sports Stadium, Ghana</p>
                </div>

                {/* Price */}
                <div className="bg-muted p-4 rounded-lg border border-gray-100">
                  <div className="flex items-center text-muted-foreground mb-1">
                    <Ticket className="w-5 h-5 mr-2 text-primary" />
                    <span className="text-sm font-medium">Price</span>
                  </div>
                  <p className="text-muted-foreground">GHS 150.00 – GHS 500.00</p>
                </div>

                {/* Availability */}
                <div className="bg-muted p-4 rounded-lg border border-gray-100">
                  <div className="flex items-center text-muted-foreground mb-1">
                    <Ticket className="w-5 h-5 mr-2 text-primary" />
                    <span className="text-sm font-medium">Availability</span>
                  </div>
                  <p className="text-muted-foreground">120 Tickets Left</p>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-12 border-t border-border pt-8">
                <div className="flex items-center gap-2 mb-4">
                  <Info className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-semibold text-foreground">Additional Information</h2>
                </div>
                <div className="text-sm text-muted-foreground space-y-2 leading-relaxed">
                  <p>Gates open at 5:30 PM. Please arrive early to avoid long queues and ensure smooth entry.</p>
                  <p>No outside food or drinks allowed. Refreshments will be available inside the venue.</p>
                  <p>VIP ticket holders should use the designated entrance for expedited access and seating.</p>
                  <p>This is a rain-or-shine event. Please dress appropriately and be ready to party!</p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <div className="sticky top-8 space-y-4">
                <Card />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
