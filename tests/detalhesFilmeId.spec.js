import { test, expect } from '@playwright/test';

test.describe('Gerenciamento de Filmes - Detalhes do Filme', () => {
  const baseUrl = 'http://localhost:3000/movies';

  test('Deve retornar detalhes de um filme existente', async ({ request }) => {
    const response = await request.get(`${baseUrl}/1`); // ID existente
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body).toHaveProperty('id', 1);
    expect(body).toHaveProperty('title');
    expect(body).toHaveProperty('description');
    expect(body).toHaveProperty('duration');
  });

  test('Deve retornar erro 404 para um filme inexistente', async ({ request }) => {
    const response = await request.get(`${baseUrl}/9999`); // ID inexistente
    expect(response.status()).toBe(404);
  });
});
