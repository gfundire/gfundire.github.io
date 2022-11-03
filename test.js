function cleanString(str) {
    return str
        .replace(/[^\w\s]|_/g, '')
        .replace(/\s+/g, ' ')
        .toLowerCase()
}

function extractSubstr(str, regexp) {
    return cleanString(str).match(regexp) || []
}

function getWordsByNonWhiteSpace(str) {
    return extractSubstr(str, /\S+/g)
}

function getWordsByWordBoundaries(str) {
    return extractSubstr(str, /\b[a-z\d]+\b/g)
}

function countWords(str) {
    return getWordsByWordBoundaries(str).length
}

var text = `WWWWWWWWW
anything? this code is very confusing and that website you literally copied and pasted from it is not helpful at all. Im just confused more than anything I get that its supposed to check for words without spaces our double spaces but how? just a million randomly placed characters really doesnt help... – user2755667 
`
countWords(text)

console.log(extractSubstr(text))
