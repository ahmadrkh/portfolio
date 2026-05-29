/** Ambient grid + radial glows used behind the hero and headers. */
export function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="grid-backdrop absolute inset-0" />
      <div className="absolute -right-24 -top-40 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.14),transparent_70%)] blur-2xl" />
      <div className="absolute -left-20 top-1/3 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.10),transparent_70%)] blur-2xl" />
    </div>
  );
}
