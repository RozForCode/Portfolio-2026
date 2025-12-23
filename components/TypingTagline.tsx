"use client";
import React, { useState, useEffect } from "react";

interface TypingTaglineProps {
    text: string[];
    className?: string;
}

const TypingTagline: React.FC<TypingTaglineProps> = ({ text, className }) => {
    const [currentText, setCurrentText] = useState("");

    useEffect(() => {
        let i = 0;
        let offset = 0;
        let forwards = true;
        let skip_count = 0;
        const skip_delay = 15;
        const speed = 70;
        const words = text;
        const len = words.length;

        const interval = setInterval(() => {
            if (forwards) {
                if (offset >= words[i].length) {
                    ++skip_count;
                    if (skip_count === skip_delay) {
                        forwards = false;
                        skip_count = 0;
                    }
                }
            } else {
                if (offset === 0) {
                    forwards = true;
                    i++;
                    if (i >= len) {
                        i = 0;
                    }
                    offset = 0;
                }
            }

            const part = words[i].substring(0, offset);

            if (skip_count === 0) {
                if (forwards) {
                    offset++;
                } else {
                    offset--;
                }
            }

            setCurrentText(part);
        }, speed);

        return () => clearInterval(interval);
    }, [text]);

    return <p className={className}>{currentText}</p>;
};

export default TypingTagline;
