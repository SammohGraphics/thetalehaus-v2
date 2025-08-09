'use client';
import Image from 'next/image';
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  img: string;
  title: string;
  description: string;
  className?: string;
}

export const ProjectCard = ({ 
  img, 
  title, 
  description,
  className
}: ProjectCardProps) => (
  <div className={cn(
    "relative h-64 w-80 cursor-pointer overflow-hidden rounded-xl border p-4 group",
    "border-gray-950/[.1] hover:bg-gray-950/[.05]",
    "dark:border-gray-50/[.1] dark:hover:bg-gray-50/[.15]",
    className
  )}>
    <div className="absolute inset-0 z-0">
      <Image
        src={img}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        quality={85}
        priority={false}
      />
      <div 
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"
        aria-hidden="true"
      />
    </div>
    <div className="relative z-10 h-full flex flex-col justify-end">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-sm text-gray-200 line-clamp-2">{description}</p>
    </div>
  </div>
);