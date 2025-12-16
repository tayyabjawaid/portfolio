'use client';

import { useState, useEffect } from 'react';

export default function Typewriter() {
    const roles = ['CMS Expert', 'Frontend Developer', 'UI/UX Designer', 'Backend Developer'];
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(100);

    useEffect(() => {
        const currentRole = roles[currentRoleIndex];

        const handleTyping = () => {
            if (!isDeleting) {
                // Typing forward
                if (displayText.length < currentRole.length) {
                    setDisplayText(currentRole.substring(0, displayText.length + 1));
                    setTypingSpeed(100);
                } else {
                    // Finished typing, wait before deleting
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                // Deleting backward
                if (displayText.length > 0) {
                    setDisplayText(currentRole.substring(0, displayText.length - 1));
                    setTypingSpeed(50);
                } else {
                    // Finished deleting, move to next role
                    setIsDeleting(false);
                    setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
                    setTypingSpeed(100);
                }
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, currentRoleIndex, typingSpeed, roles]);

    return (
        <span className="text-accent">
            {displayText}
            <span className="animate-pulse">|</span>
        </span>
    );
}
