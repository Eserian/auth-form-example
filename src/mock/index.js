import { createServer, Response } from 'miragejs';

export const setupMockServer = () =>
  createServer({
    routes() {
      this.post('http://example.com/api/endpoint', async (schema, request) => {
        const { email, password } = JSON.parse(request.requestBody);

        if (email === 'user@example.com' && password === 'password123') {
          return { success: true };
        }
        return new Response(400, {}, { error: 'Invalid credentials' });
      });
    },
  });
