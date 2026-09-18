import { useEffect, useRef } from 'react';
import './CustomCursor.css';

const TRAIL_LENGTH = 24;

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const trailContainerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const trailContainer = trailContainerRef.current;

    if (!cursor || !trailContainer) return;

    const trailElements = [];

    for (let index = 0; index < TRAIL_LENGTH; index += 1) {
      const trailElement = document.createElement('span');

      trailElement.className = 'cursor-trail-square';
      trailContainer.appendChild(trailElement);

      trailElements.push(trailElement);
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let cursorX = mouseX;
    let cursorY = mouseY;

    const positions = Array.from(
      { length: TRAIL_LENGTH },
      () => ({
        x: mouseX,
        y: mouseY,
      })
    );

    let animationId;

    const handleMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      cursor.classList.add('is-visible');
      trailContainer.classList.add('is-visible');
    };

    const clickableSelector = [
      'a',
      'li',
      'button',
      'input',
      'textarea',
      'select',
      'summary',
      '[role="button"]',
      '[tabindex]:not([tabindex="-1"])',
      '[data-cursor-hover]',
    ].join(',');

    const handleInteractiveEnter = () => {
      cursor.classList.add('is-interactive');
      trailContainer.classList.add('is-interactive');
    };

    const handleInteractiveLeave = () => {
      cursor.classList.remove('is-interactive');
      trailContainer.classList.remove('is-interactive');
    };

    const addInteractiveListeners = () => {
      const elements = document.querySelectorAll(clickableSelector);

      elements.forEach((element) => {
        element.addEventListener('mouseenter', handleInteractiveEnter);
        element.addEventListener('mouseleave', handleInteractiveLeave);
      });

      return elements;
    };

    const interactiveElements = addInteractiveListeners();

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.3;
      cursorY += (mouseY - cursorY) * 0.3;

      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;

      positions[0].x += (mouseX - positions[0].x) * 0.2;
      positions[0].y += (mouseY - positions[0].y) * 0.2;

      for (let index = 1; index < positions.length; index += 1) {
        const previousPosition = positions[index - 1];
        const currentPosition = positions[index];

        currentPosition.x +=
          (previousPosition.x - currentPosition.x) * 0.35;

        currentPosition.y +=
          (previousPosition.y - currentPosition.y) * 0.35;
      }

      trailElements.forEach((element, index) => {
        const position = positions[index];
        const progress = index / TRAIL_LENGTH;

        const size = 8 - progress * 5;
        const opacity = 1 - progress;

        const distanceX = mouseX - position.x;
        const distanceY = mouseY - position.y;

        const distance = Math.sqrt(
          distanceX * distanceX + distanceY * distanceY
        );

        const fadeNearCursor = Math.min(distance / 35, 1);
        const finalOpacity = opacity * fadeNearCursor;

        element.style.left = `${position.x}px`;
        element.style.top = `${position.y}px`;
        element.style.width = `${size}px`;
        element.style.height = `${size}px`;
        element.style.opacity = finalOpacity;
      });

      animationId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);

      interactiveElements.forEach((element) => {
        element.removeEventListener(
          'mouseenter',
          handleInteractiveEnter
        );

        element.removeEventListener(
          'mouseleave',
          handleInteractiveLeave
        );
      });

      trailElements.forEach((element) => {
        element.remove();
      });
    };
  }, []);

  return (
    <>
      <div ref={trailContainerRef} className="cursor-trail" />
      <div ref={cursorRef} className="custom-cursor" />
    </>
  );
}