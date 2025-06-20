'use client';

import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const CustomCursor = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      if (cursorDotRef.current && cursorOutlineRef.current) {
        cursorDotRef.current.style.left = `${clientX}px`;
        cursorDotRef.current.style.top = `${clientY}px`;

        cursorOutlineRef.current.animate(
          {
            left: `${clientX}px`,
            top: `${clientY}px`,
          },
          { duration: 500, fill: 'forwards' }
        );
      }
    };

    const onMouseEnter = () => {
      cursorOutlineRef.current?.classList.add('scale-150');
    };

    const onMouseLeave = () => {
      cursorOutlineRef.current?.classList.remove('scale-150');
    };

    window.addEventListener('mousemove', onMouseMove);

    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select'
    );
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnter);
      el.addEventListener('mouseleave', onMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);
      });
    };
  }, []);

  return (
    <div className="hidden md:block">
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2"
      />
      <div
        ref={cursorOutlineRef}
        className="fixed top-0 left-0 w-10 h-10 border-2 border-accent rounded-full pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-in-out"
      />
    </div>
  );
};

export default CustomCursor;
