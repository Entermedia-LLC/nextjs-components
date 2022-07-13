// Import Next.js dependencies
import Head from "next/head";

// Component properties
interface NextMetaTagProps {
  tag?: string;
  attributes: {
    name?: string;
    content?: string;
    rel?: string;
    property?: string;
  };
}

interface NextMetaProps {
  /** Meta tags */
  tags?: NextMetaTagProps[];
}

// Component export
export function NextMeta({ tags }: NextMetaProps) {
  return (
    <Head>
      {tags?.map((tag, index) => {
        if (tag.attributes.name === "title") {
          return (
            <title key={tag.attributes.name}>{tag.attributes.content}</title>
          );
        }

        const Tag = tag.tag as keyof JSX.IntrinsicElements;
        return <Tag key={index} {...tag.attributes}></Tag>;
      })}
    </Head>
  );
}
