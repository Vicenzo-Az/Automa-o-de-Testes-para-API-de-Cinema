import { test, expect } from '@playwright/test';

test.describe('Gerenciamento de Filmes - Criar Filme', () => {
  const baseUrl = 'http://localhost:3000/movies';

  test('Deve criar um filme com sucesso', async ({ request }) => {
    const response = await request.post(baseUrl, {
      data: {
        title: 'Interstellar',
        description: 'Exploração espacial em busca de um novo lar.',
        duration: 169,
      },
    });
    expect(response.status()).toBe(201);
    const body = await response.json();
    expect(body).toHaveProperty('id');
  });

  test('Deve retornar erro para título duplicado', async ({ request }) => {
    await request.post(baseUrl, {
      data: { title: 'Interstellar', description: 'Teste duplicado', duration: 100 },
    });
    const response = await request.post(baseUrl, {
      data: { title: 'Interstellar', description: 'Teste duplicado', duration: 100 },
    });
    expect(response.status()).toBe(400);
  });
});
