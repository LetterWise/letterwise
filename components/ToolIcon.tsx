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

function IconShell({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <div
      className={`relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-3xl shadow-sm ring-1 ring-black/5 ${className}`}
    >
      <span className="absolute right-3 top-2 h-1.5 w-1.5 rounded-full bg-white/80" />
      <span className="absolute right-6 top-5 h-1 w-1 rounded-full bg-white/70" />
      <span className="absolute bottom-4 left-4 h-1.5 w-1.5 rounded-full bg-white/70" />
      {children}
    </div>
  );
}

function FinderIcon() {
  return (
    <IconShell className="bg-gradient-to-br from-violet-100 to-indigo-200">
      <div className="relative grid grid-cols-2 gap-1">
        {["W", "O", "R", "D"].map((letter, index) => (
          <span
            key={letter}
            className={`flex h-5 w-5 items-center justify-center rounded-md text-xs font-black shadow-sm ${
              index === 1
                ? "bg-amber-200 text-slate-900"
                : "bg-white text-violet-700"
            }`}
          >
            {letter}
          </span>
        ))}
      </div>

      <div className="absolute bottom-3 right-3 h-5 w-5 rounded-full border-[5px] border-violet-700" />
      <div className="absolute bottom-2.5 right-1.5 h-2 w-4 rotate-45 rounded-full bg-violet-700" />
    </IconShell>
  );
}

function UnscrambleIcon() {
  return (
    <IconShell className="bg-gradient-to-br from-amber-100 to-orange-200">
      <span className="absolute left-3 top-4 flex h-7 w-7 -rotate-12 items-center justify-center rounded-xl bg-white text-lg font-black text-orange-700 shadow-sm">
        A
      </span>
      <span className="absolute right-4 top-4 flex h-7 w-7 rotate-12 items-center justify-center rounded-xl bg-white text-lg font-black text-orange-700 shadow-sm">
        Z
      </span>
      <span className="absolute bottom-4 left-5 flex h-7 w-7 rotate-6 items-center justify-center rounded-xl bg-violet-600 text-lg font-black text-white shadow-sm">
        ?
      </span>
      <span className="absolute bottom-3 right-4 text-lg font-black text-orange-700">
        ↻
      </span>
    </IconShell>
  );
}

function WordleIcon() {
  return (
    <IconShell className="bg-gradient-to-br from-emerald-100 to-teal-200">
      <div className="relative grid grid-cols-3 gap-1">
        {[
          "bg-emerald-600",
          "bg-amber-300",
          "bg-slate-300",
          "bg-slate-300",
          "bg-emerald-600",
          "bg-amber-300",
          "bg-emerald-600",
          "bg-emerald-600",
          "bg-slate-300",
        ].map((color, index) => (
          <span key={index} className={`h-4 w-4 rounded ${color}`} />
        ))}
      </div>
    </IconShell>
  );
}

function ListsIcon() {
  return (
    <IconShell className="bg-gradient-to-br from-sky-100 to-blue-200">
      <div className="relative space-y-2">
        {["bg-blue-600", "bg-violet-600", "bg-amber-300"].map((color, index) => (
          <div key={index} className="flex items-center gap-1.5">
            <span className={`h-3 w-3 rounded ${color}`} />
            <span className="h-3 w-8 rounded bg-white shadow-sm" />
          </div>
        ))}
      </div>
    </IconShell>
  );
}

function DailyIcon() {
  return (
    <IconShell className="bg-gradient-to-br from-fuchsia-100 to-violet-200">
      <div className="relative h-9 w-9 rounded-2xl bg-white p-1.5 shadow-sm">
        <div className="grid grid-cols-2 gap-1">
          <span className="h-3 w-3 rounded bg-violet-600" />
          <span className="h-3 w-3 rounded bg-white ring-1 ring-violet-200" />
          <span className="h-3 w-3 rounded bg-amber-300" />
          <span className="h-3 w-3 rounded bg-emerald-500" />
        </div>
      </div>
      <span className="absolute bottom-3 right-3 text-lg">★</span>
    </IconShell>
  );
}

function GuideIcon() {
  return (
    <IconShell className="bg-gradient-to-br from-indigo-100 to-violet-200">
      <div className="relative h-10 w-8 rounded-xl bg-white shadow-sm">
        <div className="mx-auto mt-2 h-1 w-4 rounded bg-violet-300" />
        <div className="mx-auto mt-1 h-1 w-5 rounded bg-violet-300" />
        <div className="mx-auto mt-1 h-1 w-3 rounded bg-violet-300" />
      </div>
      <span className="absolute bottom-3 right-4 flex h-6 w-6 items-center justify-center rounded-full bg-amber-300 text-sm font-black text-slate-900">
        ?
      </span>
    </IconShell>
  );
}

function VowelsIcon() {
  return (
    <IconShell className="bg-gradient-to-br from-rose-100 to-pink-200">
      <div className="relative flex items-end gap-0.5">
        <span className="text-2xl font-black text-rose-700">A</span>
        <span className="text-xl font-black text-amber-600">I</span>
        <span className="text-2xl font-black text-violet-700">E</span>
      </div>
    </IconShell>
  );
}

function RepeatIcon() {
  return (
    <IconShell className="bg-gradient-to-br from-teal-100 to-emerald-200">
      <div className="relative grid grid-cols-2 gap-1">
        <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-white text-lg font-black text-teal-700 shadow-sm">
          A
        </span>
        <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-white text-lg font-black text-teal-700 shadow-sm">
          B
        </span>
        <span className="col-span-2 mx-auto flex h-7 w-7 items-center justify-center rounded-xl bg-violet-600 text-lg font-black text-white shadow-sm">
          C
        </span>
      </div>
    </IconShell>
  );
}

export default function ToolIcon({ type }: ToolIconProps) {
  if (type === "finder") return <FinderIcon />;
  if (type === "unscramble") return <UnscrambleIcon />;
  if (type === "wordle") return <WordleIcon />;
  if (type === "lists") return <ListsIcon />;
  if (type === "daily") return <DailyIcon />;
  if (type === "guide") return <GuideIcon />;
  if (type === "vowels") return <VowelsIcon />;
  if (type === "repeat") return <RepeatIcon />;

  return <FinderIcon />;
}
