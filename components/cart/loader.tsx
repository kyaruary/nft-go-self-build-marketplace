import { Loader as PrimitiveLoader } from "@/primitives";

export function Loader() {
  return (
    <PrimitiveLoader
      css={{
        backgroundColor: "$contentBackground",
        position: "absolute",
        inset: 0,
        opacity: 0.6,
        zIndex: 10000,
      }}
    />
  );
}
