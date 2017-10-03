class Calculette {
    calcul(a, b, operateur) {
        // eval on utilise avec précotion
        return eval(a + operateur + b);
    }
}