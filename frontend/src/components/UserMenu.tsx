import React from "react";

export interface Props {
  className?: string;
}

export function UserMenu({ className = "" }: Props) {
  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {/* Patreon button removed */}
    </div>
  );
}
