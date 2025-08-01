'use client';
import { cn } from "@/lib/utils";

export const ProjectCard = ({ img, title, description }: { 
  img: string, 
  title: string, 
  description: string 
}) => (
  <div className={cn(
    "relative h-64 w-80 cursor-pointer overflow-hidden rounded-xl border p-4 group",
    "border-gray-950/[.1] hover:bg-gray-950/[.05]",
    "dark:border-gray-50/[.1] dark:hover:bg-gray-50/[.15]"
  )}>
    <div className="absolute inset-0 z-0">
      <img 
        src={img} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
    </div>
    <div className="relative z-10 h-full flex flex-col justify-end">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-sm text-gray-200 line-clamp-2">{description}</p>
    </div>
  </div>
);