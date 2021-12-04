const pegaArquivo = require('../index.js')
const index = require('../index.js')

test('deve ser uma função', () => {
    expect(typeof pegaArquivo).toBe('function')
})