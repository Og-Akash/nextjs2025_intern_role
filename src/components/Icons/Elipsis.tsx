import React from "react";

interface ElipsisProps extends React.SVGProps<SVGSVGElement> {
  strokeColor?: string;
  size?: string;
}

const Elipsis: React.FC<ElipsisProps> = ({
  strokeColor = "#A0A3BD",
  size = 22,
  className = "",
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      className={className}
      {...props}
    >
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <circle cx="5" cy="12" r="1" />
    </svg>
  );
};

export default Elipsis;
