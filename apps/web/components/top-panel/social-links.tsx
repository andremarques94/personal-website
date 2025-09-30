import GitHub from "@/app/svg/github.svg";
import LinkedIn from "@/app/svg/linkedin.svg";

interface SocialLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}

function SocialLink({ href, children, external = false }: SocialLinkProps) {
  return (
    <a
      href={href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className="text-muted-foreground hover:text-foreground transition-colors duration-200"
    >
      {children}
    </a>
  );
}

function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      <SocialLink href="https://github.com/andremarques94" external>
        <GitHub className="w-5 h-5" />
      </SocialLink>
      <SocialLink
        href="https://www.linkedin.com/in/andrelourencomarques"
        external
      >
        <LinkedIn className="w-5 h-5" />
      </SocialLink>
      <SocialLink href="mailto:al.marquestko@gmail.com">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      </SocialLink>
    </div>
  );
}

export { SocialLinks };
