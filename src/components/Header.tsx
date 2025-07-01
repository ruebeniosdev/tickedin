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
import { Menu } from "lucide-react";

export const Header = () => {
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
              <Link to="/sell">
                <Button>Sell Tickets</Button>
              </Link>
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
                    <Link to="/sell">Sell Tickets</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/my-tickets">My Tickets</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
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
