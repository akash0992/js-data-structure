function towerOfHanoi(n, from, aux, to) {
    if (n == 1) {
        console.info(from, "<<<TO>>>", to);
        return;
    }
    towerOfHanoi(n - 1, from, to, aux); //move first n-1 to B
    console.info(from, "<<<TO>>>", to); //move nth from A--->C
    towerOfHanoi(n - 1, aux, from, to); //move n-1 from B--->C

}
towerOfHanoi(2, "Tower-A", "Tower-B", "Tower-C");