"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Global error:", error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center px-4 bg-background text-foreground">
          <div className="text-center max-w-md">
            <div className="mb-6">
              <h1 className="text-4xl font-light mb-2">Critical Error</h1>
              <h2 className="text-xl text-muted-foreground mb-4">
                Something went seriously wrong
              </h2>
              <p className="text-sm text-muted-foreground">
                A critical error occurred. Please reload the page or contact
                support.
              </p>
            </div>

            <div className="space-y-3">
              <button
                onClick={reset}
                className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                Try again
              </button>
              <button
                onClick={() => (window.location.href = "/")}
                className="w-full px-4 py-2 border border-border rounded-md hover:bg-accent transition-colors"
              >
                Reload page
              </button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
