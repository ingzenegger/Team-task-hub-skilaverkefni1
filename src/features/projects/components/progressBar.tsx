export default function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="w-full">
      <p className="text-xs">Progress: {progress}%</p>
      <div className="h-2 w-full bg-gray-400 rounded-sm overflow-hidden">
        <div
          style={{ width: `${progress}%` }}
          className="h-full bg-green-700 rounded-sm"
        ></div>
      </div>
    </div>
  );
}
