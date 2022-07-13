// Import component dependencies
import { NextImage } from "../../atoms/NextImage/NextImage";
import { NextLink } from "../../atoms/NextLink/NextLink";

// Import library dependencies
import parse, { HTMLReactParserOptions, domToReact } from "html-react-parser";
import { Element } from "domhandler/lib/node";

// Component properties
interface NextHTMLParserProps {
  /** HTML to parse */
  html: string;
  /** Class name */
  className?: string;
}

// Parser options
const options: HTMLReactParserOptions = {
  replace: (domNode) => {
    {
      /* @TODO: Doesn't appear to e working. */
    }
    if (domNode instanceof Element) {
      if (domNode.name === "img") {
        const { src, alt, width, height } = domNode.attribs;

        return <NextImage src={src} alt={alt} width={width} height={height} />;
      }

      if (domNode.name === "a") {
        const { href, class: className } = domNode.attribs;

        return (
          <NextLink href={href}>
            {/* @TODO: Fix TypeScript notice. */}
            <a className={className}>{domToReact(domNode.children)}</a>
          </NextLink>
        );
      }
    }
  },
};

// Component export
export function NextHTMLParser({ html, className }: NextHTMLParserProps) {
  if (!className?.length) {
    return <>{parse(html, options)}</>;
  }

  return <div className={className}>{parse(html, options)}</div>;
}
