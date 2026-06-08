export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900">
      <div className="text-center">
        <div className="relative w-20 h-20 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full border-4 border-sky-100 dark:border-sky-900/30" />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-sky-500 animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-sky-500 animate-pulse"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </div>
        </div>
        <h2 className="text-xl font-semibold text-foreground mb-2">Loading your adventure...</h2>
        <p className="text-sm text-muted-foreground">Preparing your travel experience</p>
      </div>
    </div>
  );
}
