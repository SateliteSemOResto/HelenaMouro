import type { CSSProperties, ElementType, ReactNode } from "react";

// Figma-style selection frame: cyan outline + four corner handles.
export default function SelectionBox({
  children,
  rotate = 0,
  as: Tag = "span",
  className = "",
  soft = false,
  style,
}: {
  children?: ReactNode;
  rotate?: number;
  as?: ElementType;
  className?: string;
  soft?: boolean; // lighter outline, no handles (used around the Experience title)
  style?: CSSProperties;
}) {
  return (
    <Tag
      className={`sel-box ${soft ? "sel-soft" : ""} ${className}`}
      style={{ transform: `rotate(${rotate}deg)`, ...style }}
    >
      {children}
      {!soft && (
        <>
          <i className="h h-tl" /><i className="h h-tr" /><i className="h h-bl" /><i className="h h-br" />
        </>
      )}
    </Tag>
  );
}
