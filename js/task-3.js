function getElementWidth(content, padding, border) {
    const total = content + padding * 2 + border * 2
    return `${total} px `
}

console.log(getElementWidth(50, 8, 4))
console.log(getElementWidth(60, 12, 8.5))
console.log(getElementWidth(200, 0, 0))


