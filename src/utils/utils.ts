const crop = (str: string, length = 50, dots = false) => {
    if (str.length <= length) return str;
    let output = str.substr(0, length);
    output = output.substr(0, output.lastIndexOf(" "));
    return !dots ? output : `${output}...`;
};

const darkTheme = (isTrue: boolean) => {
    document.body.classList.toggle("dark", isTrue);
};

export { crop, darkTheme };
