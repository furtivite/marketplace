export const TYPOGRAPHY_TYPES = {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  H5: 'h5',
  H6: 'h6',
  BODY_REGULAR: 'body-regular',
  BODY_MEDIUM: 'body-medium',
  LABEL: 'label',
  LABEL_UPPERCASE: 'label-uppercase',
} as const;

export type TypographyType = (typeof TYPOGRAPHY_TYPES)[keyof typeof TYPOGRAPHY_TYPES];
