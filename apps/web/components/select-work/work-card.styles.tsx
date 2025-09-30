import { ReactNode } from "react";

export function WorkCardContainer({ children }: { children: ReactNode }) {
  return <div className="py-6">{children}</div>;
}

export function WorkCardGrid({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">{children}</div>
  );
}

export function TitleSection({ children }: { children: ReactNode }) {
  return <div className="lg:col-span-1">{children}</div>;
}

export function ContentSection({ children }: { children: ReactNode }) {
  return <div className="lg:col-span-3 flex flex-col gap-4">{children}</div>;
}

export function WorkTitle({ children }: { children: ReactNode }) {
  return <h3 className="mb-2 text-lg lg:text-xl font-semibold">{children}</h3>;
}

export function WorkCompany({ children }: { children: ReactNode }) {
  return <p className="text-sm text-muted-foreground mb-1">{children}</p>;
}

export function WorkYears({ children }: { children: ReactNode }) {
  return <p className="text-xs text-muted-foreground">{children}</p>;
}

export function WorkDescription({ children }: { children: ReactNode }) {
  return (
    <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
      {children}
    </p>
  );
}

export function WorkContainer({ children }: { children: ReactNode }) {
  return (
    <section className="grid gap-8 lg:gap-10 max-w-6xl mx-auto">
      {children}
    </section>
  );
}
