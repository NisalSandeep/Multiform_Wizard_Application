function Breadcrumb() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 pt-8 md:px-6 md:pt-10">
      <div className="grid grid-cols-3 items-start gap-3">
        <div className="flex flex-col items-center gap-3">
          <div className="relative flex w-full items-center justify-center">
            <span className="badge badge-primary h-10 w-10 rounded-full text-base font-semibold">
              1
            </span>
            <span className="absolute left-[58%] right-[-48%] top-1/2 hidden h-px -translate-y-1/2 bg-base-300 md:block" />
          </div>
          <span className="text-sm font-semibold text-primary">Personal info</span>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="relative flex w-full items-center justify-center">
            <span className="badge badge-ghost h-10 w-10 rounded-full border border-base-300 text-base font-semibold">
              2
            </span>
            <span className="absolute left-[58%] right-[-48%] top-1/2 hidden h-px -translate-y-1/2 bg-base-300 md:block" />
          </div>
          <span className="text-sm font-semibold text-base-content/70">Skills & avatar</span>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="flex w-full items-center justify-center">
            <span className="badge badge-ghost h-10 w-10 rounded-full border border-base-300 text-base font-semibold">
              3
            </span>
          </div>
          <span className="text-sm font-semibold text-base-content/70">Review</span>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumb;
