// Para ejecutar estas pruebas hay que poner la extensión .e2e.js a este archivo.

// Esta es una prueba de integración pero lleva la extensión e2e.js para que...
// ... lo ejecute testRegex del archivo de configuración de Supertest (jest-e2e.json).

const mockGetAll = jest.fn(); // Tocó subirla para que la llame bien en el test.

const request = require('supertest');

const { generateManyBook } = require('../src/fakes/book.fake');

const createApp = require('../src/app');

// Suplantación de la BD.
jest.mock('../src/lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  // Metodos a suplantar.
  getAll: mockGetAll,
  create: () => {},
})));

describe('Test for books', () => {
  let app = null;
  let server = null;

  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  afterAll(async () => {
    await server.close();
  });

  describe('test for [GET] /api/v1/books', () => { // Es similar a lo que hacemos en postman.
    test('should return list books', () => {
      // Arrange
      const fakeBooks = generateManyBook(3);
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      return request(app)
        .get('/api/v1/books') // Este slash "/" inicial es obligatorio.
        .expect(200)
        .then(({ body }) => {
          console.log(body);
          // Assert
          expect(body.length).toEqual(fakeBooks.length);
        });
    });
  });
});
