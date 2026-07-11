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

function Sparkles() {
  return (
    <>
      <span className="absolute right-3 top-2 h-1.5 w-1.5 rounded-full bg-white/80" />
      <span className="absolute right-6 top-5 h-1 w-1 rounded-full bg-white/70" />
      <span className="absolute bottom-4 left-4 h-1.5 w-1.5 rounded-full bg-white/70" />
    </>
  );
}

function FinderIcon() {
  return (
    <div className="relative h-16 w-16 rounded-3xl bg-gradient-to-br from-violet-100 to-indigo-200 shadow-sm">
      <Sparkles />
      <div className="absolute left-4 top-4 grid grid-cols-2 gap-1">
        <span className="flex h-5 w-5 items-center justify-center rounded-md bg-white text-xs font-black text-violet-700 shadow-sm">
          W
        </span>
        <span className="flex h-5 w-5 items-center justify-center rounded-md bg-amber-200 text-xs font-black text-slate-900 shadow-sm">
          O
        </span>
        <span className="flex h-5 w-5 items-center justify-center rounded-md bg-white text-xs font-black text-violet-700 shadow-sm">
          R
        </span>
        <span className="flex h-5 w-5 items-center justify-center rounded-md bg-white text-xs font-black text-violet-700 shadow-sm">
          D
        </span>
      </div>
      <div className="absolute bottom-3 right-3 h-5 w-5 rounded-full border-4 border-violet-700" />
      <div className="absolute bottom-2 right-1 h-2 w-5 rotate-45 rounded-full bg-violet-700" />
    </div>
  );
}

function UnscrambleIcon() {
  return (
    <div className="relative h-16 w-16 rounded-3xl bg-gradient-to-br from-amber-100 to-orange-200 shadow-sm">
      <Sparkles />
      <span className="absolute left-3 top-4 flex h-7 w-7 -rotate-12 items-center justify-center rounded-xl bg-white text-lg font-black text-orange-700 shadow-sm">
        A
      </span>
      <span className="absolute right-4 top-3 flex h-7 w-7 rotate-12 items-center justify-center rounded-xl bg-white text-lg font-black text-orange-700 shadow-sm">
        Z
      </span>
      <span className="absolute bottom-4 left-5 flex h-7 w-7 rotate-6 items-center justify-center rounded-xl bg-violet-600 text-lg font-black text-white shadow-sm">
        ?
      </span>
      <div className="absolute bottom-3 right-3 text-xl font-black text-orange-700">
        ↻
      </div>
    </div>
  );
}

function WordleIcon() {
  return (
    <div className="relative h-16 w-16 rounded-3xl bg-gradient-to-br from-emerald-100 to-teal-200 shadow-sm">
      <Sparkles />
      <div className="absolute left-4 top-4 grid grid-cols-3 gap-1">
        <span className="h-4 w-4 rounded bg-emerald-600" />
        <span className="h-4 w-4 rounded bg-amber-300" />
        <span className="h-4 w-4 rounded bg-slate-300" />
        <span className="h-4 w-4 rounded bg-slate-300" />
        <span className="h-4 w-4 rounded bg-emerald-600" />
        <span className="h-4 w-4 rounded bg-amber-300" />
        <span className="h-4 w-4 rounded bg-emerald-600" />
        <span className="h-4 w-4 rounded bg-emerald-600" />
        <span className="h-4 w-4 rounded bg-slate-300" />
      </div>
    </div>
  );
}

function ListsIcon() {
  return (
    <div className="relative h-16 w-16 rounded-3xl bg-gradient-to-br from-sky-100 to-blue-200 shadow-sm">
      <Sparkles />
      <div className="absolute left-4 top-4 space-y-2">
        <div className="flex gap-1">
          <span className="h-3 w-3 rounded bg-blue-600" />
          <span className="h-3 w-8 rounded bg-white shadow-sm" />
        </div>
        <div className="flex gap-1">
          <span className="h-3 w-3 rounded bg-violet-600" />
          <span className="h-3 w-8 rounded bg-white shadow-sm" />
        </div>
        <div className="flex gap-1">
          <span className="h-3 w-3 rounded bg-amber-300" />
          <span className="h-3 w-8 rounded bg-white shadow-sm" />
        </div>
      </div>
    </div>
  );
}

function DailyIcon() {
  return (
    <div className="relative h-16 w-16 rounded-3xl bg-gradient-to-br from-fuchsia-100 to-violet-200 shadow-sm">
      <Sparkles />
      <div className="absolute left-4 top-4 h-9 w-9 rounded-2xl bg-white p-1.5 shadow-sm">
        <div className="grid grid-cols-2 gap-1">
          <span className="h-3 w-3 rounded bg-violet-600" />
          <span className="h-3 w-3 rounded bg-white ring-1 ring-violet-200" />
          <span className="h-3 w-3 rounded bg-amber-300" />
          <span className="h-3 w-3 rounded bg-emerald-500" />
        </div>
      </div>
      <span className="absolute bottom-3 right-3 text-xl">★</span>
    </div>
  );
}

function GuideIcon() {
  return (
    <div className="relative h-16 w-16 rounded-3xl bg-gradient-to-br from-indigo-100 to-violet-200 shadow-sm">
      <Sparkles />
      <div className="absolute left-4 top-3 h-10 w-8 rounded-xl bg-white shadow-sm">
        <div className="mx-auto mt-2 h-1 w-4 rounded bg-violet-300" />
        <div className="mx-auto mt-1 h-1 w-5 rounded bg-violet-300" />
        <div className="mx-auto mt-1 h-1 w-3 rounded bg-violet-300" />
      </div>
      <span className="absolute bottom-3 right-4 flex h-6 w-6 items-center justify-center rounded-full bg-amber-300 text-sm font-black text-slate-900">
        ?
      </span>
    </div>
  );
}

function VowelsIcon() {
  return (
    <div className="relative h-16 w-16 rounded-3xl bg-gradient-to-br from-rose-100 to-pink-200 shadow-sm">
      <Sparkles />
      <span className="absolute left-4 top-4 text-2xl font-black text-rose-700">
        A
      </span>
      <span className="absolute right-4 top-5 text-2xl font-black text-violet-700">
        E
      </span>
      <span className="absolute bottom-3 left-6 text-2xl font-black text-amber-600">
        I
      </span>
    </div>
  );
}

function RepeatIcon() {
  return (
    <div className="relative h-16 w-16 rounded-3xl bg-gradient-to-br from-teal-100 to-emerald-200 shadow-sm">
      <Sparkles />
      <span className="absolute left-4 top-4 flex h-7 w-7 items-center justify-center rounded-xl bg-white text-lg font-black text-teal-700 shadow-sm">
        A
      </span>
      <span className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-xl bg-white text-lg font-black text-teal-700 shadow-sm">
        B
      </span>
      <span className="absolute bottom-4 left-1/2 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-xl bg-violet-600 text-lg font-black text-white shadow-sm">
        C
      </span>
    </div>
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
