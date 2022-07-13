// Import component dependencies
import { PageFooter } from "components/organisms/PageFooter/PageFooter";

// Component properties
export interface PageTemplateProps {
  children: React.ReactNode;
}

// Component export
export function PageTemplate({ children }: PageTemplateProps) {
  return (
    <>
      {children}
      <PageFooter />
    </>
  );
}
