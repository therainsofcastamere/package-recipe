describe('index.js', () => {
    it('greet function returns Hello, World!', () => {
        const greet = require('../src/index')
        expect(greet()).toBe('Hello, World!')
    })
})