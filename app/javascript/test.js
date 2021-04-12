let num = []
let str = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
const oneHundred = str.length

function incrementNum() {
    if (num.length  === oneHundred) {
        return;
    } 
    else if (num.length < oneHundred)
        var totalNum = num.push("a")
        console.log(totalNum)
        incrementNum()
}

incrementNum();