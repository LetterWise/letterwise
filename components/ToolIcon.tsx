type ToolIconProps = {
  type:
    | "finder"
    | "unscramble"
    | "wordle"
    | "lists"
    | "daily"
    | "guide"
    | "vowels"
    | "repeat";
};

const iconStyles: Record<ToolIconProps["type"], string> = {
  finder: "bg-violet-100 text-violet-700",
  unscramble: "bg-amber-100 text-amber-700",
  wordle: "bg-emerald-100 text-emerald-700",
  lists: "bg-sky-100 text-sky-700",
  daily: "bg-fuchsia-100 text-fuchsia-700",
  guide: "bg-indigo-100 text-indigo-700",
  vowels: "bg-rose-100 text-rose-700",
  repeat: "bg-teal-100 text-teal-700",
};

const iconLabels: Record<ToolIconProps["type"], string> = {
  finder: "Aa",
  unscramble: "ↄ",
  wordle: "▦",
  lists: "≡",
  daily: "★",
  guide: "?",
  vowels: "AE",
  repeat: "×",
};

export default function ToolIcon({ type }: ToolIconProps) {
  return (
    <div
      className={`relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/70 shadow-sm ${iconStyles[type]}`}
    >
      <div className="absolute -right-3 -top-3 h-8 w-8 rounded-full bg-white/45" />
      <div className="absolute -bottom-4 -left-4 h-10 w-10 rounded-full bg-white/35" />

      <span className="relative text-xl font-black tracking-tight">
        {iconLabels[type]}
      </span>
    </div>
  );
}
