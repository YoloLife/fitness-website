import React from "react";

export type FilterOption = "latest" | "popular" | "oldest";

export interface Props {
  selectedFilter: FilterOption;
  onFilterChange: (filter: FilterOption) => void;
  className?: string;
}

export function FilterBar({ selectedFilter, onFilterChange, className = "" }: Props) {
  return (
    <div className={`flex items-center justify-between border-b border-border pb-4 mb-8 ${className}`}>
      <h2 className="text-xl font-medium">Articles</h2>
      
      <div className="flex items-center space-x-1 border border-border rounded-md overflow-hidden">
        <button
          onClick={() => onFilterChange("latest")}
          className={`px-3 py-1.5 text-sm font-medium transition-colors ${selectedFilter === "latest" ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`}
        >
          Latest
        </button>
        <button
          onClick={() => onFilterChange("popular")}
          className={`px-3 py-1.5 text-sm font-medium transition-colors ${selectedFilter === "popular" ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`}
        >
          Popular
        </button>
        <button
          onClick={() => onFilterChange("oldest")}
          className={`px-3 py-1.5 text-sm font-medium transition-colors ${selectedFilter === "oldest" ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`}
        >
          Oldest
        </button>
      </div>
    </div>
  );
}