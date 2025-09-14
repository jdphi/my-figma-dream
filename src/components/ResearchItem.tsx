import { cn } from "@/lib/utils";
import { MessageCircle, Plus, ChevronDown } from "lucide-react";

interface ResearchItemProps {
  className?: string;
}

export function ResearchItem({ className }: ResearchItemProps) {
  return (
    <div className={cn("bg-card rounded-lg shadow-soft overflow-hidden", className)}>
      {/* Research Item Header */}
      <div className="bg-research-item text-research-item-foreground p-4 rounded-t-lg">
        <div className="flex items-center gap-2">
          <MessageCircle className="w-5 h-5" />
          <span className="font-medium">Attached Research Item...</span>
        </div>
      </div>

      {/* Comments Section */}
      <div className="space-y-2 p-4">
        {/* Create Comment */}
        <div className="bg-research-comment text-research-comment-foreground p-3 rounded-md">
          <div className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            <span className="text-sm font-medium">Create Comment...</span>
          </div>
        </div>

        {/* Most Recent Comment */}
        <div className="bg-research-comment text-research-comment-foreground p-3 rounded-md">
          <div className="flex items-center gap-2">
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Most recent comment...</span>
          </div>
        </div>

        {/* Load More Comments */}
        <div className="bg-research-comment text-research-comment-foreground p-3 rounded-md">
          <div className="flex items-center gap-2">
            <ChevronDown className="w-4 h-4" />
            <span className="text-sm font-medium">Load More comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}