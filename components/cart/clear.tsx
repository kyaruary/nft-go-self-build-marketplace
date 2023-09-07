import { Text } from "@/primitives";
type Props = {
  onClear: () => void;
};

export function Clear(props: Props) {
  const { onClear } = props;
  return (
    <Text
      style="subtitle2"
      css={{
        color: "$accentSolid",
        cursor: "pointer",
        ml: 24,
        "&:hover": { color: "$accentSolidHover" },
      }}
      onClick={onClear}
    >
      Clear All
    </Text>
  );
}
