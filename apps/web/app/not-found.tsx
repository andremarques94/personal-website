import Link from "next/link";
import { Button } from "@workspace/ui/components/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-6">
          <h1 className="text-6xl font-light mb-2">404</h1>
          <h2 className="text-xl text-muted-foreground mb-4">Page not found</h2>
          <p className="text-sm text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
        </div>

        <div className="space-y-3">
          <Button asChild className="w-full">
            <Link href="/">Go home</Link>
          </Button>
          <Button variant="outline" asChild className="w-full">
            <Link href="javascript:history.back()">Go back</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
