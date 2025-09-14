import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchPanelProps {
  className?: string;
}

export function SearchPanel({ className }: SearchPanelProps) {
  const results = Array.from({ length: 15 }, (_, i) => `Results`);

  return (
    <aside className={cn("w-80 bg-search-panel text-search-panel-foreground flex flex-col", className)}>
      {/* User Status */}
      <div className="p-4 border-b border-search-panel-foreground/10">
        <div className="bg-search-input text-search-panel-foreground px-3 py-2 rounded-md text-sm">
          Logged in as: [username]...
        </div>
      </div>

      {/* Search Section */}
      <div className="p-4 border-b border-search-panel-foreground/10">
        <div className="space-y-3">
          <Input 
            placeholder="Text field to search"
            className="bg-search-input border-0 text-search-panel-foreground placeholder:text-search-panel-foreground/60"
          />
          <Button 
            variant="secondary" 
            className="w-full bg-search-input hover:bg-search-input/80 text-search-panel-foreground border-0"
          >
            <Search className="w-4 h-4 mr-2" />
            Search button
          </Button>
        </div>
      </div>

      {/* Results Section */}
      <div className="flex-1 p-4">
        <div className="space-y-2">
          {results.map((result, index) => (
            <div 
              key={index}
              className="text-search-results text-sm py-1 hover:text-search-panel-foreground transition-colors cursor-pointer"
            >
              {result}
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}