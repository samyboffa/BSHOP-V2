export const replaceWord = (word) => {
    let width = window.screen.width;
    // eslint-disable-next-line
    if (width > 768) {
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
    } else {
        return word;
    }
};
