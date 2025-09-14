import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

interface TopicHeaderProps {
  className?: string;
}

export function TopicHeader({ className }: TopicHeaderProps) {
  return (
    <div className={cn("mb-6", className)}>
      <Input 
        placeholder="Topic Name [50 char]"
        className="text-center text-lg font-medium bg-card border-2 border-border rounded-lg py-3 px-4 shadow-soft"
        maxLength={50}
      />
    </div>
  );
}