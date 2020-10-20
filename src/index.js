module.exports = function check(str, bracketsConfig) {

    const stack = [];
    let indexOpen,
        indexClose,
        openBracket;

    for (char of str) {

        for (let i = 0; i < bracketsConfig.length; i++) {
            for (let j = 0; j < 2; j++) {

                openBracket = stack[stack.length - 1]
                if ((bracketsConfig[i][j] === openBracket) && (j === 0)) {
                    indexOpen = i;
                }

                if ((bracketsConfig[i][j] === char) && (j === 0)) {
                    stack.push(char);
                    indexOpen = i;
                    continue;

                } else {
                    if ((bracketsConfig[i][j] === char) && (j === 1)) {
                        indexClose = i;

                        if (indexOpen === indexClose) {
                            stack.pop();
                            continue;
                        }
                    }
                }

            }
        }
    }

    return stack.length === 0;

}
