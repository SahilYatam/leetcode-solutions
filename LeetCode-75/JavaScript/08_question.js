// 443. String Compression

/**
 * @param {character[]} chars
 * @return {number}
 */
const compress = (chars) => {
    let writeP = 0
    let count = 1

    for(let readP = 1; readP <= chars.length; readP++){
        if(readP === chars.length || chars[readP] !== chars[readP - 1]){
            chars[writeP] = chars[readP - 1]
            writeP++

            if(count > 1){
                const digits = String(count)
                for(let d of digits){
                    chars[writeP] = d;
                    writeP++
                }
            }

            count = 1
        } else{
            count++
        }
    }
    return writeP
}




let chars = ["a", "a", "b", "b", "c", "c", "c"]
// let chars = ["a"]
// let chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]

console.log(compress(chars))