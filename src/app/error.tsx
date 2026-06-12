"use client";
export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16">
      <p className="text-[0.75rem] font-medium uppercase tracking-[0.14em] text-[#888888] mb-6">Error</p>
      <h1 className="text-[3rem] font-semibold tracking-[-0.02em] text-[#111111] mb-4">Something went wrong.</h1>
      <p className="text-[1.125rem] text-[#555555] max-w-[36ch] leading-[1.7] mb-10">An unexpected error occurred. Please try again.</p>
      <button onClick={reset} className="inline-flex items-center gap-2 px-6 py-2.5 rounded-[999px] bg-[#111111] text-white text-[0.875rem] font-medium hover:bg-[#555555] transition-colors duration-200">Try again</button>
    </div>
  );
}
