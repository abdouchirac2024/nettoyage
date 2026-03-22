import { useState, useEffect } from 'react';

function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check if it's a touch device
        const checkMobile = () => {
            setIsMobile(window.matchMedia('(pointer: coarse)').matches);
        };
        checkMobile();

        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (
                e.target.tagName === 'A' ||
                e.target.tagName === 'BUTTON' ||
                e.target.closest('button') ||
                e.target.closest('a') ||
                e.target.style.cursor === 'pointer'
            ) {
                setIsHovered(true);
            }
        };

        const handleMouseOut = () => {
            setIsHovered(false);
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);
        window.addEventListener('mouseout', handleMouseOut);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);

    if (isMobile) return null;

    return (
        <>
            <div
                className={`fixed top-0 left-0 w-8 h-8 rounded-full border border-primary-500 pointer-events-none z-[9999] transition-transform duration-300 ease-out mix-blend-difference ${isHovered ? 'scale-150 bg-primary-500/10' : 'scale-100'
                    }`}
                style={{
                    transform: `translate(${position.x - 16}px, ${position.y - 16}px) scale(${isHovered ? 1.5 : 1})`,
                }}
            />
            <div
                className="fixed top-0 left-0 w-1.5 h-1.5 bg-primary-500 rounded-full pointer-events-none z-[9999] transition-transform duration-100 ease-out"
                style={{
                    transform: `translate(${position.x - 3}px, ${position.y - 3}px)`,
                }}
            />
        </>
    );
}

export default CustomCursor;
