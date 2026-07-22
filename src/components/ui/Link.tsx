"use client";

import NextLink from "next/link";
import { cn } from "@/lib/utils";

type LinkProps = {
  label: string;
  url: string;
  tag?: "a" | "li" | "div" | "span";
  className?: string;
  onClick?: () => void;
};

export default function Link({
  label,
  url,
  tag = "a",
  className,
  onClick,
}: LinkProps) {
  const classes = cn("link-underline inline-block cursor-pointer", className);

  if (tag === "li") {
    return (
      <li className={classes}>
        <NextLink href={url} onClick={onClick} data-cursor="hover">
          {label}
        </NextLink>
      </li>
    );
  }

  if (tag === "div" || tag === "span") {
    const Tag = tag;
    return (
      <Tag className={classes} onClick={onClick} data-cursor="hover">
        <NextLink href={url} onClick={onClick}>
          {label}
        </NextLink>
      </Tag>
    );
  }

  return (
    <NextLink href={url} className={classes} onClick={onClick} data-cursor="hover">
      {label}
    </NextLink>
  );
}
