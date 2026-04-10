export default function StatusBar({
  planned,
  inProgress,
}: {
  planned: number;
  inProgress: number;
}) {
  return (
    <div className="w-full">
      <div className="flex h-auto w-full bg-gray-400 rounded-sm overflow-hidden">
        <div
          style={{ width: `${planned}%` }}
          className={`h-full rounded-l-sm p-2 ${planned > 0 ? "bg-cyan-500" : "hidden"}`}
        >
          Planned
        </div>
        <div
          style={{ width: `${inProgress}%` }}
          className={`h-full p-2 ${inProgress > 0 ? "bg-emerald-500" : "hidden"}`}
        >
          In progress
        </div>
      </div>
    </div>
  );
}
