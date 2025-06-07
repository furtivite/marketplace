import * as React from 'react';
import clsx from 'clsx';
import { Typography, TYPOGRAPHY_TYPES } from '../../../../shared/ui/Typography';
import { Input } from '../../../../shared/ui/Input';
import { Button } from '../../../../shared/ui/Button';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) setError(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Простая валидация email
    const isValidEmail = /^\S+@\S+\.\S+$/.test(email);
    if (!isValidEmail) {
      setError(true);
      return;
    }
    alert(`Subscribed with ${email}`);
    setEmail('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="Newsletter subscription form"
      className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-4xl"
    >
      <div className="flex flex-col flex-1 min-w-0">
        <Typography
          type={TYPOGRAPHY_TYPES.H3}
          className="mb-1"
          as="h2"
        >
          Join Our Newsletter
        </Typography>
        <Typography
          type={TYPOGRAPHY_TYPES.BODY_REGULAR}
          className="text-neutral-600"
          as="p"
        >
          We love to surprise our subscribers with occasional gifts.
        </Typography>
      </div>

      <div className="flex flex-1 max-w-lg w-full gap-2">
        <Input
          type="email"
          id="newsletter-email"
          placeholder="Your email address"
          value={email}
          onChange={handleChange}
          aria-invalid={error}
          aria-describedby={error ? 'newsletter-error' : undefined}
          className={clsx('flex-grow')}
          required
        />
        <Button type="submit" color="primary">
          Subscribe
        </Button>
      </div>

      {error && (
        <Typography
          id="newsletter-error"
          type={TYPOGRAPHY_TYPES.BODY_REGULAR}
          className="text-red-600 mt-1 sr-only"
          as="span"
          role="alert"
        >
          Please enter a valid email address.
        </Typography>
      )}
    </form>
  );
};
