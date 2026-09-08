'use client';
import { useEffect, useRef } from 'react';
import styles from '../../styles/Cursor.module.css';

export default function CursorFollower() {
    const dotRef = useRef(null);
    const ringRef = useRef(null);
    const posRef = useRef({ x: -100, y: -100 });
    const ringRef2 = useRef({ x: -100, y: -100 });
    const hoveringRef = useRef(false);
    const dotScaleRef = useRef(1);
    const ringScaleRef = useRef(1);
    const rafRef = useRef(null);

    useEffect(() => {
        const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (isTouch) return;

        const dot = dotRef.current;
        const ring = ringRef.current;

        if (!dot || !ring) return;

        const check = (e) => {
            const target = e.target;
            const related = e.relatedTarget;

            const interactive = target.closest('a, button, input, textarea, [role="button"], [data-cursor="pointer"]');
            const relatedInteractive = related?.closest('a, button, input, textarea, [role="button"], [data-cursor="pointer"]');

            if (interactive && !relatedInteractive) {
                hoveringRef.current = true;
            } else if (!interactive && relatedInteractive) {
                hoveringRef.current = false;
            }
        };

        document.addEventListener('mouseover', check);

        let ringX = -100;
        let ringY = -100;

        const animate = () => {
            const p = posRef.current;
            const r = ringRef2.current;

            const targetDotScale = hoveringRef.current ? 1.5 : 1;
            dotScaleRef.current += (targetDotScale - dotScaleRef.current) * 0.15;
            dot.style.left = p.x + 'px';
            dot.style.top = p.y + 'px';
            dot.style.transform = `translate(-50%, -50%) scale(${dotScaleRef.current})`;

            r.x += (p.x - r.x) * 0.12;
            r.y += (p.y - r.y) * 0.12;

            const targetRingScale = hoveringRef.current ? 1.8 : 1;
            ringScaleRef.current += (targetRingScale - ringScaleRef.current) * 0.12;

            const borderWidth = hoveringRef.current ? 2 : 1.5;

            ring.style.left = r.x + 'px';
            ring.style.top = r.y + 'px';
            ring.style.transform = `translate(-50%, -50%) scale(${ringScaleRef.current})`;
            ring.style.borderWidth = borderWidth + 'px';

            rafRef.current = requestAnimationFrame(animate);
        };

        rafRef.current = requestAnimationFrame(animate);

        return () => {
            document.removeEventListener('mouseover', check);
            cancelAnimationFrame(rafRef.current);
        };
    }, []);

    useEffect(() => {
        const handleMove = (e) => {
            posRef.current = { x: e.clientX, y: e.clientY };
        };

        document.addEventListener('mousemove', handleMove);
        return () => document.removeEventListener('mousemove', handleMove);
    }, []);

    return (
        <>
            <div ref={dotRef} className={styles.cursor_dot} />
            <div ref={ringRef} className={styles.cursor_ring} />
        </>
    );
}
