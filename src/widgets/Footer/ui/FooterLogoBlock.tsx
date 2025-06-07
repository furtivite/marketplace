import * as React from 'react';
import { Typography, TYPOGRAPHY_TYPES } from '../../../shared/ui/Typography';
import { Logo } from '../../../shared/ui/Logo';

import GithubIcon from '@/shared/assets/icons/social/github.svg?react';
import InstagramIcon from '@/shared/assets/icons/social/instagram.svg?react';
import YoutubeIcon from '@/shared/assets/icons/social/youtube.svg?react';

interface SocialLink {
  href: string;
  label: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const iconClassName = 'w-6 h-6 grayscale transition duration-300 ease-in-out hover:grayscale-0';

const socialLinks: SocialLink[] = [
  {
    href: 'https://github.com/',
    label: 'GitHub',
    Icon: GithubIcon,
  },
  {
    href: 'https://instagram.com/',
    label: 'Instagram',
    Icon: InstagramIcon,
  },
  {
    href: 'https://youtube.com/',
    label: 'YouTube',
    Icon: YoutubeIcon,
  },
];

export const FooterLogoBlock: React.FC = () => {
  return (
    <div className="flex flex-col gap-3 max-w-xs">
      <Logo variant="dark" />
      <Typography
        type={TYPOGRAPHY_TYPES.BODY_REGULAR}
        as="p"
        className="text-neutral-600"
      >
        DevCut is a YouTube channel for practical project-based learning.
      </Typography>
      <div className="flex gap-4 mt-3" aria-label="Social media links" role="list">
        {socialLinks.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="hover:text-neutral-900"
            role="listitem"
          >
            <Icon className={iconClassName} />
          </a>
        ))}
      </div>
    </div>
  );
};
