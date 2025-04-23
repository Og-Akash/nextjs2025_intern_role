// components/SearchIcon.tsx
import React from "react";

interface SearchIconProps extends React.SVGProps<SVGSVGElement> {
  strokeColor?: string;
  size?: number;
}

const SearchIcon: React.FC<SearchIconProps> = ({
  strokeColor = "#A0A3BD",
  size = 22,
  className,
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <circle
        cx="11.5614"
        cy="10.8948"
        r="8.32274"
        stroke={strokeColor}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.3501 17.1161L20.6131 20.3706"
        stroke={strokeColor}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SearchIcon;
