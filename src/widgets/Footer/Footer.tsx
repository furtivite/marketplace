import * as React from 'react';
import { Newsletter } from "./ui/Newsletter";

interface FooterProps {
  hasNewsletter?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ hasNewsletter = false }) => (
  <footer>
    {hasNewsletter && Newsletter && <Newsletter />}
    Footer
  </footer>
);
