import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface TabItem {
  value: string;
  label: string;
  content: React.ReactNode;
}

interface TabsButtonProps {
  tabs: TabItem[];
  defaultValue?: string;
  className?: string;
  listClassName?: string;
  triggerClassName?: string;
  contentClassName?: string;
}

const TabsButton: React.FC<TabsButtonProps> = ({
  tabs,
  defaultValue,
  className,
  listClassName,
  triggerClassName,
  contentClassName,
}) => {
  return (
    <Tabs
      defaultValue={defaultValue || tabs[0]?.value}
      className={cn("w-full", className)}
    >
      <TabsList
        className={cn("flex gap-2 bg-gray-100 p-2 rounded-md", listClassName)}
      >
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className={cn(
              "px-4 py-2 rounded-md text-sm font-medium transition-all",
              "data-[state=active]:bg-blue-500 data-[state=active]:text-white",
              triggerClassName
            )}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((tab) => (
        <TabsContent
          key={tab.value}
          value={tab.value}
          className={cn("p-4 border rounded-lg shadow-md", contentClassName)}
        >
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default TabsButton;
