import * as React from "react";
import {Typography, TYPOGRAPHY_TYPES} from "../shared/ui/Typography";

export const App: React.FC = () => {
  return (
    <Typography type={TYPOGRAPHY_TYPES.H1} as="h1" className="text-primary-400">
      Tailwind работает
    </Typography>
  );
};
