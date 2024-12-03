import { test, expect } from '@playwright/test';

test.describe('Gerenciamento de Filmes - Listar Filmes', () => {
  const baseUrl = 'http://localhost:3000/movies';

  test('Deve retornar a lista de filmes com sucesso', async ({ request }) => {
    const response = await request.get(baseUrl);
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(Array.isArray(body)).toBeTruthy();
    expect(body.length).toBeGreaterThanOrEqual(0);
  });
});
