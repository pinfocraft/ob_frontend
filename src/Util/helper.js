const getFirstCapitalLetter = (name = null) => {
    if (name !== null) {
        const matches = name.match(/\b(\w)/g);
        return matches.join(''); // JSON
    } else return '';
}

export { getFirstCapitalLetter }