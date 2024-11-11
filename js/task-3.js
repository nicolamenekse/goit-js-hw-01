function getElementWidth(content,padding,border){
    const total = content + padding * 2 + border * 2 
    return `${total} px `
}

getElementWidth(20,21,22)
getElementWidth(1451,124,23)
getElementWidth(123,123,423)