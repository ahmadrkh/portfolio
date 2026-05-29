import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BackgroundFX } from "@/components/ui/BackgroundFX";

export default function NotFound() {
  return (
    <div className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
      <BackgroundFX />
      <div className="shell relative text-center">
        <p className="font-mono text-[13px] uppercase tracking-[0.2em] text-accent">
          Error 404
        </p>
        <h1 className="mt-4 font-display text-display-lg font-semibold text-ink">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-[15px] text-ink-muted">
          That route doesn&apos;t exist — it may have moved, or never shipped.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/">
            <ArrowLeft className="h-4 w-4" />
            Back home
          </Button>
        </div>
      </div>
    </div>
  );
}
