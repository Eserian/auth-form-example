import { rest, setupWorker } from 'msw';

export const setupMockWorker = () => {
  const worker = setupWorker(
    rest.post('http://example.com/api/endpoint', async (req, res, ctx) => {
      const { email, password } = await req.json();

      if (email === 'user@example.com' && password === 'password123') {
        return res(ctx.status(200), ctx.delay(1000), ctx.json({ success: true }));
      }
      return res(ctx.status(400), ctx.delay(1000), ctx.json({ error: 'Invalid credentials' }));
    }),
  );

  worker.start();
};
