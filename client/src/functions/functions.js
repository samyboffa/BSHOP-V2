export const replaceWord = (word) => {
    // eslint-disable-next-line
    const newWorld = word.split("").map((el, index) => {
        if (index <= 22) {
            return el;
        }
        if (index > 22 && index < 26) {
            return ".";
        }
        if (index > 26) {
            return "";
        }
    });
    return newWorld;
};
