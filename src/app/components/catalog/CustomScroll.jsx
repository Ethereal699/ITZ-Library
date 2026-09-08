'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './CustomScroll.module.css';

export default function CustomScroll({ children }) {
    const contentRef = useRef(null);
    const trackRef = useRef(null);
    const [thumb, setThumb] = useState({ height: 0, top: 0, visible: false });

    useEffect(() => {
        const content = contentRef.current;
        const track = trackRef.current;
        if (!content || !track) return;

        const update = () => {
            const { scrollTop, scrollHeight, clientHeight } = content;
            const trackHeight = track.offsetHeight;
            const maxScroll = scrollHeight - clientHeight;
            const progress = maxScroll > 0 ? scrollTop / maxScroll : 0;
            const h = maxScroll > 0 ? Math.max(20, (clientHeight / scrollHeight) * trackHeight) : 0;
            const t = progress * (trackHeight - h);
            setThumb({ height: h, top: t, visible: maxScroll > 0 });
            
            clearTimeout(content._t);
            content._t = setTimeout(() => setThumb(prev => ({ ...prev, visible: false })), 150);
        };

        content.addEventListener('scroll', update);
        update();
        return () => {
            content.removeEventListener('scroll', update);
            clearTimeout(content._t);
        };
    }, []);

    return (
        <div style={{ position: 'relative', overflow: 'hidden', flex: 1, minHeight: 0 }}>
            <div 
                className={styles.scrollContent} 
                ref={contentRef}
            >
                {children}
            </div>
            <div className={styles.scrollTrack} ref={trackRef}>
                <div 
                    className={`${styles.scrollThumb} ${thumb.visible ? styles.visible : ''}`}
                    style={{ height: `${thumb.height}px`, top: `${thumb.top}px` }}
                />
            </div>
        </div>
    );
}