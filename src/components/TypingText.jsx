import { useEffect, useState } from "react";

const words = [
    "Web Developer",
    "Editor",
    "Front End",
    "Sasuke Theme",
];

export default function TypingText() {
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex];
        let timeout;

        if (!isDeleting) {
            // typing
            timeout = setTimeout(() => {
                setText(currentWord.substring(0, text.length + 1));
            }, 100);
        } else {
            // deleting
            timeout = setTimeout(() => {
                setText(currentWord.substring(0, text.length - 1));
            }, 60);
        }

        if (!isDeleting && text === currentWord) {
            timeout = setTimeout(() => setIsDeleting(true), 1200);
        }

        if (isDeleting && text === "") {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
        }

        return () => clearTimeout(timeout);
    }, [text, isDeleting, wordIndex]);

    return (
        <p className="mt-4 text-sm text-gray-300 tracking-wide">
            <span className="text-sharingan font-medium">{text}</span>
            <span className="animate-pulse">|</span>
        </p>
    );
}
