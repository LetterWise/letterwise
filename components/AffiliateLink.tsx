import type { ComponentPropsWithoutRef, ReactNode } from "react";

type AffiliateLinkProps = Omit<
  ComponentPropsWithoutRef<"a">,
  "children" | "href" | "rel" | "target"
> & {
  children: ReactNode;
  href: string;
};

export default function AffiliateLink({
  children,
  href,
  ...props
}: AffiliateLinkProps) {
  return (
    <a
      {...props}
      href={href}
      target="_blank"
      rel="sponsored nofollow noopener noreferrer"
    >
      {children}
      <span aria-hidden="true" className="ml-1 inline-block">
        ↗
      </span>
      <span className="ml-2 text-xs font-black uppercase tracking-wide">
        Affiliate link
      </span>
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
