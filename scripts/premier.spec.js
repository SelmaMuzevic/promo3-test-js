// test
it('should be true', () => {
    // insertion
    expect(true).toBe(true);
});

describe('function additionner', () => {
    /* ideal est d'avoir un test pour chaque scénario prévu par la function.
    Mais la réalité étant ce qu'elle fait 
    ce contenter des tests "importants" (a nous de voir ce qui est important)
    */
    it('should add 2 to 2', () => {
        let resultat = additionner(2, 2);
        expect(resultat).toBe(4);

    });

    // faire un test ici avec des nombres négatifs
    it('should add with négatif numbers', () => {
        expect(additionner(-2, -2)).toBe(-4);
    });

    // faire un test ici avec des chaînes de caractère
    it('should concatenate string parameters', () => {
        expect(additionner.bind(null, 'bloup', 2)).toThrowError();
    });
});