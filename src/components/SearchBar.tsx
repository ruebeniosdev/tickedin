import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const SearchBar = () => {
  return (
    <form className="relative w-full max-w-md sm:max-w-lg md:w-1/2">
      {/* Input Field */}
      <Input
        type="search"
        placeholder="Search events, tickets..."
        className="w-full py-3 px-4 pl-12 pr-28 bg-white rounded-xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
      />

      {/* Search Icon */}
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

      {/* Submit Button */}
      <button
        type="submit"
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
      >
        Search
      </button>
    </form>
  );
};
