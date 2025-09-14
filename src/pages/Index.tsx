import { Sidebar } from "@/components/Sidebar";
import { SearchPanel } from "@/components/SearchPanel";
import { TopicHeader } from "@/components/TopicHeader";
import { ResearchItem } from "@/components/ResearchItem";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Left Sidebar */}
      <Sidebar />
      
      {/* Main Content Area */}
      <main className="flex-1 p-6">
        <TopicHeader />
        
        {/* Research Items Grid */}
        <div className="space-y-6">
          <ResearchItem />
          <ResearchItem />
          <ResearchItem />
        </div>
      </main>
      
      {/* Right Search Panel */}
      <SearchPanel />
    </div>
  );
};

export default Index;
