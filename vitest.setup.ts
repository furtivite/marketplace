// vitest.setup.ts

// Расширения для Jest-style матчеров (toBeInTheDocument и прочие)
import '@testing-library/jest-dom';

// (Опционально) если вы используете MSW для моков API:
// import { server } from './mocks/server';
// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());
