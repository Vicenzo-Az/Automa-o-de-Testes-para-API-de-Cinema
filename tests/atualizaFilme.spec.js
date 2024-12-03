import { test, expect } from '@playwright/test';

test.describe('Gerenciamento de Filmes - Atualizar Filme', () => {
  const baseUrl = 'http://localhost:3000/movies';

  test('Deve atualizar um filme com sucesso', async ({ request }) => {
    const response = await request.put(`${baseUrl}/1`, {
      data: { title: 'Interestelar - Atualizado', duration: 180 },
    });
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.title).toBe('Interestelar - Atualizado');
  });

  test('Deve retornar erro ao tentar atualizar filme inexistente', async ({ request }) => {
    const response = await request.put(`${baseUrl}/9999`, {
      data: { title: 'Inexistente' },
    });
    expect(response.status()).toBe(404);
  });
});
