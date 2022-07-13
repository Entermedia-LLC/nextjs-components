// Import config
import { SITE_NAME } from "../../../../config";

// Import styles
import layoutStyles from "scss/helpers/layout.module.scss";

// Component properties
export interface PageFooterProps {}

// Component export
export function PageFooter({}: PageFooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${layoutStyles.wrapper} ${layoutStyles["padding-x"]}`}>
      <p style={{ textAlign: "center", opacity: "0.25" }}>
        <small>
          &copy; {currentYear}. {SITE_NAME}. All rights reserved.
        </small>
      </p>
    </footer>
  );
}
