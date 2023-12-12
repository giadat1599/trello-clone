"use client";

import { ActivityIcon } from "lucide-react";
import { AutditLog } from "@prisma/client";

import { Skeleton } from "@/components/ui/skeleton";
import { ActivityItem } from "@/components/activity-item";

interface ActivityProps {
   items: AutditLog[];
}

export const Activity = ({ items }: ActivityProps) => {
   return (
      <div className="flex items-start gap-x-3 w-full">
         <ActivityIcon className="h-5 w-5 mt-0.5 text-neutral-700" />
         <div className="w-full">
            <p className="font-semibold text-neutral-700 mb-2">Activity</p>
            <ol className="space-y-2">
               {items.map((item) => (
                  <ActivityItem key={item.id} data={item} />
               ))}
            </ol>
         </div>
      </div>
   );
};

Activity.Skeleton = function ActivitySkeleton() {
   return (
      <div className="flex items-start gap-x-3 w-full">
         <Skeleton className="bg-neutral-200 h-6 w-6" />
         <div className="w-full">
            <Skeleton className="bg-neutral-200 mb-2 w-24 h-6" />
            <Skeleton className="bg-neutral-200 w-full h-10" />
         </div>
      </div>
   );
};
