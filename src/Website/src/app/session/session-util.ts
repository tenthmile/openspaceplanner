function getDifficultyText(value: number | undefined | null): string {
    if (!value) {
        return "no difficulty assigned";
    }
    switch (value) {
        case 1:
        return "easy";
        case 2:
        return "moderate";
        case 3:
        return "moderately difficult";
        case 4:
        return "difficult";
        case 5:
        return "very difficult";
        default:
        return "no difficulty assigned";
    }
}

export { getDifficultyText };