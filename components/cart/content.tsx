import { keyframes } from "@/styled";
import { Popover } from "@/primitives";

import React, { ComponentPropsWithRef, PropsWithChildren } from "react";

import { CONTENT_OFFSET } from "./constants";

const scaleUp = keyframes({
  "0%": { opacity: 0, transform: "scale(0.9) translateY(-10px)" },
  "100%": { opacity: 1, transform: "scale(1) translateY(0)" },
});

const scaleDown = keyframes({
  "0%": { opacity: 1, transform: "scale(1) translateY(0)" },
  "100%": { opacity: 0, transform: "scale(0.9) translateY(-10px)" },
});

export type ContentProps = {
  side?: ComponentPropsWithRef<typeof Popover>["side"];
  triggerBottom: number;
  open: boolean;
};

export function Content(props: PropsWithChildren<ContentProps>) {
  const { side, triggerBottom, open } = props;

  return (
    <Popover.Content
      side={side}
      sideOffset={CONTENT_OFFSET}
      css={{
        display: "flex",
        flexDirection: "column",
        zIndex: 1001,
        transformOrigin: "var(--radix-popover-content-transform-origin)",
        animation: `${open ? scaleUp : scaleDown} 0.2s ease-in-out`,
        overflowY: "auto",
        borderRadius: "$borderRadius",
        $$shadowColor: "$colors$gray7",
        boxShadow: "box-shadow: 0px 2px 16px $$shadowColor",
        border: "1px solid $borderColor",
        p: 24,
        minHeight: 500,
        width: 395,
        maxHeight: `calc(100vh - ${triggerBottom || 0}px - (25px * 2) - 10px)`,
        backgroundColor: "$contentBackground",
        boxSizing: "border-box",
        "@media(max-width: 520px)": {
          height: `calc(100vh - ${triggerBottom || 0}px - (25px * 2))`,
          width: "100vw",
          minHeight: "100%",
        },
      }}
    >
      {props.children}
    </Popover.Content>
  );
}
