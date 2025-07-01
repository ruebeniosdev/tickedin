import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Menu, X } from "lucide-react";
import { SellTicket } from "@/pages/SellTicket";

export const Header = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <header className="border-b bg-background w-full">
      <nav
        className="flex items-center justify-between px-4 py-4 max-w-screen-xl mx-auto"
        aria-label="Main navigation"
      >
        {/* Left: Logo */}
        <Link to="/" className="text-xl font-bold text-foreground">
          🎟️ TickedIn
        </Link>

        {/* Right: Nav + Toggle + Auth */}
        <div className="flex items-center gap-4">
          {/* Desktop Nav */}
          <SignedIn>
            <div className="hidden md:flex items-center gap-3">
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button onClick={() => setIsDialogOpen(true)}>
                    Sell Tickets
                  </Button>
                </DialogTrigger>
                <DialogContent className="w-full max-w-2xl sm:rounded-lg sm:max-h-[90vh] overflow-y-auto px-4 sm:px-6 py-6">
                  <DialogHeader className="flex justify-between items-center">
                    <DialogTitle>Sell a Ticket</DialogTitle>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsDialogOpen(false)}
                    >
                      <X className="w-5 h-5" />
                    </Button>
                  </DialogHeader>
                  <SellTicket />
                </DialogContent>
              </Dialog>

              <Link to="/my-tickets">
                <Button variant="outline">My Tickets</Button>
              </Link>
            </div>
          </SignedIn>

          {/* Mobile Dropdown Nav */}
          <SignedIn>
            <div className="md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Button
                      variant="ghost"
                      className="w-full text-left"
                      onClick={() => setIsDialogOpen(true)}
                    >
                      Sell Tickets
                    </Button>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/my-tickets">My Tickets</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Mobile Modal */}
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="w-full max-w-2xl sm:rounded-lg sm:max-h-[90vh] overflow-y-auto px-4 sm:px-6 py-6">
                  <DialogContent className="w-full max-w-2xl sm:rounded-lg sm:max-h-[90vh] overflow-y-auto px-4 sm:px-6 py-6">
                    <DialogHeader>
                      <DialogTitle>Sell a Ticket</DialogTitle>
                    </DialogHeader>
                    <SellTicket />
                  </DialogContent>
                  <SellTicket />
                </DialogContent>
              </Dialog>
            </div>
          </SignedIn>

          {/* Theme Toggle */}
          <ModeToggle />

          {/* Auth */}
          <SignedIn>
            <UserButton />
          </SignedIn>

          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="outline">Sign In</Button>
            </SignInButton>
          </SignedOut>
        </div>
      </nav>
    </header>
  );
};
