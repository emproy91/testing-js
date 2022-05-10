// En estas pruebas e2e no se hace Mocking, usaremos BD paralelas reales sin afectar producción.

const request = require('supertest');

// Como aquí si tocamos la BD se pueden implantar semillas (set de datos).
const { MongoClient } = require('mongodb');

const createApp = require('../src/app');

// Traemos las variables de configuración de la app.
const { config } = require('../src/config');

// Conexión a la BD.
// Llamamos la BD como lo haría mongo.lib.
const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;

describe('Test for books', () => {
  let app = null;
  let server = null;
  let database = null;

  beforeAll(async () => {
    app = createApp();
    server = app.listen(3001);
    const client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Ya tenemos el cliente.
    });
    await client.connect();
    database = client.db(DB_NAME);
    // Establece conexión con la BD paralela.
  });

  afterAll(async () => {
    await server.close();
    await database.dropDatabase(); // borramos la anterior BD para que no se acomulen libros.
  });

  describe('test for [GET] /api/v1/books', () => { // Es similar a lo que hacemos en postman.
    test('should return list books', async () => {
      // Arrange
      // En cada caso podría ingresar un set de BD diferente
      // semilla \\
      const seedData = await database.collection('books').insertMany([
        {
          name: 'Book1',
          year: 1998,
          author: 'legolas',
        },
        {
          name: 'Book2',
          year: 1998,
          author: 'legolas',
        },
      ]);
      console.log(seedData);
      // Act
      return request(app)
      // End point.
        .get('/api/v1/books') // Este slash "/" inicial es obligatorio.
        .expect(200)
        .then(({ body }) => {
          console.log(body); // Info del End point traida de la BD.
          // Assert
          expect(body.length).toEqual(seedData.insertedCount);
        });
    });
  });
});
