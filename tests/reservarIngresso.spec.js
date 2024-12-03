import { test, expect } from '@playwright/test';

test.describe('Gerenciamento de Reservas de Ingressos', () => {
  const baseUrl = 'http://localhost:3000/tickets';

  test('Deve reservar um ingresso com sucesso', async ({ request }) => {
    const response = await request.post(baseUrl, {
      data: {
        movieId: 1,           // ID válido de um filme
        userId: 1,            // ID válido de um usuário
        seatNumber: 10,       // Número de assento válido (0-99)
        price: 50,            // Preço válido (0-60)
        showtime: '2024-12-10T20:00:00.000Z' // Data e hora válidas
      },
    });
    expect(response.status()).toBe(201);
    const body = await response.json();
    expect(body).toHaveProperty('id'); // ID único atribuído à reserva
  });

  test('Deve retornar erro ao reservar com assento fora do intervalo', async ({ request }) => {
    const response = await request.post(baseUrl, {
      data: {
        movieId: 1,
        userId: 1,
        seatNumber: 150, // Fora do intervalo (0-99)
        price: 50,
        showtime: '2024-12-10T20:00:00.000Z'
      },
    });
    expect(response.status()).toBe(400); // Validação falhou
    const body = await response.json();
    expect(body).toHaveProperty('message');
  });

  test('Deve retornar erro ao reservar com preço fora do intervalo', async ({ request }) => {
    const response = await request.post(baseUrl, {
      data: {
        movieId: 1,
        userId: 1,
        seatNumber: 10,
        price: 100, // Fora do intervalo (0-60)
        showtime: '2024-12-10T20:00:00.000Z'
      },
    });
    expect(response.status()).toBe(400); // Validação falhou
    const body = await response.json();
    expect(body).toHaveProperty('message');
  });

  test('Deve retornar erro ao reservar com campos ausentes', async ({ request }) => {
    const response = await request.post(baseUrl, {
      data: {
        movieId: 1, // Campos obrigatórios ausentes
        seatNumber: 10,
      },
    });
    expect(response.status()).toBe(400); // Validação falhou
    const body = await response.json();
    expect(body).toHaveProperty('message');
  });
});
