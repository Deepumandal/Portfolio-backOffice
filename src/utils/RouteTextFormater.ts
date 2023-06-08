export default function RouteTextFormater(text: string): string {
    const words = text.trim().split("_").join(" ").split(" ");

    const capitalizedWords = words.map((word) => {
        const lowercaseWord = word.toLowerCase();
        return lowercaseWord.charAt(0).toUpperCase() + lowercaseWord.slice(1);
    });

    return capitalizedWords.join(" ");
}