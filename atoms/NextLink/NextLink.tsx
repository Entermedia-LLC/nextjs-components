// Import React.js dependencies
import * as React from "react";

// Import Next.js dependencies
import { default as NextLinkComponent } from "next/link";
import type { LinkProps } from "next/link";
import { useRouter } from "next/router";

// Import library dependencies
import { isRelativeUrl } from "../../../lib/is-relative-url";

// Component properties
export interface NextLinkProps extends LinkProps {
  children: React.ReactNode;
}

// Component export
export function NextLink(props: NextLinkProps) {
  const router = useRouter();

  const { children, href } = props;

  if (!href) {
    return null;
  }

  // Use Next Link for internal links, and <a> for others.
  // @TODO: Fix TypeScript notice.
  if (isRelativeUrl(href)) {
    // Disable prefetching in preview mode.
    // We do this here inside of inline `prefetch={!router.isPreview}`
    // because `prefetch={true}` is not allowed.
    // See https://nextjs.org/docs/messages/prefetch-true-deprecated
    const linkProps = router.isPreview ? { prefetch: false, ...props } : props;

    return (
      <NextLinkComponent href={href} {...linkProps}>
        {children}
      </NextLinkComponent>
    );
  }

  return React.cloneElement(children, {
    href,
    rel: "noreferrer noopener",
  });
}
