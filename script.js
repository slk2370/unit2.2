const flavorCount = (flavors) => {
    const order = flavors.trim().toLowerCase().split(",");

    const obj = {
        vanilla: 0,
        strawberry: 0,
        coffee: 0
    };

    for(let flavor of order) {
        obj[flavor]++;
    }

    return obj;
}

const userInput = prompt ("Enter your order:","vanilla, vanilla, vanilla, strawberry, coffee, coffee");

console.log(flavorCount(userInput))
