export default function PriorityBar({
  low,
  medium,
  high,
}: {
  low: number;
  medium: number;
  high: number;
}) {
  //{`h-full rounded-r-sm p-2 ${high > 0 ? "bg-yellow-500" : "hidden"}`}

  return (
    <div className="w-full">
      <div className="flex h-auto w-full bg-gray-400 rounded-sm overflow-hidden">
        <div
          style={{ width: `${low}%` }}
          className={`h-full rounded-l-sm p-2 ${low > 0 ? "bg-cyan-500" : "hidden"}`}
        >
          Low
        </div>
        <div
          style={{ width: `${medium}%` }}
          className={`h-full p-2 ${medium > 0 ? "bg-emerald-500" : "hidden"}`}
        >
          Medium
        </div>
        <div
          style={{ width: `${high}%` }}
          className={`h-full rounded-r-sm p-2 ${high > 0 ? "bg-yellow-500" : "hidden"}`}
        >
          High
        </div>
      </div>
    </div>
  );
}
