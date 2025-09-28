import { ElementType, HTMLAttributes, ReactNode, forwardRef } from "react";
import { cn } from "@workspace/ui/lib/utils";

/**
 * Single source of truth for all typographic variants.
 * Each variant declares BOTH the semantic element (Component)
 * and the Tailwind utility classes applied.
 *
 * Add / modify here to propagate across the whole design system.
 */
type VariantConfig = {
  Component: ElementType;
  className: string;
};

const typographyVariants = {
  h1: {
    Component: "h1",
    className:
      "scroll-m-20 text-4xl font-extrabold tracking-tight text-balance",
  },
  h2: {
    Component: "h2",
    className:
      "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
  },
  h3: {
    Component: "h3",
    className: "scroll-m-20 text-2xl font-semibold tracking-tight",
  },
  h4: {
    Component: "h4",
    className: "scroll-m-20 text-xl font-semibold tracking-tight",
  },
  p: {
    Component: "p",
    className: "leading-7 [&:not(:first-child)]:mt-6",
  },
  block: {
    Component: "blockquote",
    className: "mt-6 border-l-2 pl-6 italic",
  },
  code: {
    Component: "code",
    className:
      "bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
  },
  lead: {
    Component: "p",
    className: "text-l text-muted-foreground font-mono tracking-wider",
  },
  large: {
    Component: "div",
    className: "text-lg font-semibold",
  },
  small: {
    Component: "small",
    className: "text-sm leading-none font-medium",
  },
  muted: {
    Component: "p",
    className: "text-muted-foreground text-sm",
  },
  bold: {
    Component: "span",
    className: "font-semibold",
  },
} as const satisfies Record<string, VariantConfig>;

type TypographyVariant = keyof typeof typographyVariants;

/**
 * Props for the Typography component.
 *
 * - variant: key into typographyVariants
 * - as: optional override element/component (keeps variant styling but changes semantic container)
 */
type TypographyProps = Omit<HTMLAttributes<HTMLElement>, "children"> & {
  variant?: TypographyVariant;
  as?: ElementType;
  children?: ReactNode;
};

/**
 * Typography
 *
 * Renders the configured variant. You can override the semantic element with `as`.
 *
 * Examples:
 *  <Typography variant="h2">Section title</Typography>
 *  <Typography variant="p" as="span">Inline paragraph text</Typography>
 *  <Typography variant="code">{`npm create`}</Typography>
 */
const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ variant = "p", as, className, children, ...rest }, ref) => {
    const config = typographyVariants[variant];
    const Component: ElementType = as || config.Component;

    return (
      <Component
        ref={ref}
        className={cn(config.className, className)}
        {...rest}
      >
        {children}
      </Component>
    );
  },
);

Typography.displayName = "Typography";

export default Typography;
