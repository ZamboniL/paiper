import { useEffect, useRef } from 'react';
import styles from './style.module.css';

const CONFIG = {
  proximity: 64,
  spread: 80,
  blur: 20,
  gap: 32,
  vertical: false,
  opacity: 0
};

interface CardProps {
  className?: string;
  title: React.ReactNode;
  description: React.ReactNode;
}

export default function IntegrationCard({ title, description, className }: CardProps) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const update = (event: PointerEvent) => {
      if (!ref.current) return;
      const card = ref.current;
      // get the angle based on the center point of the card and pointer position
      // Check the card against the proximity and then start updating
      const CARD_BOUNDS = card.getBoundingClientRect();
      // Get distance between pointer and outerbounds of card
      if (
        event.x > CARD_BOUNDS.left - CONFIG.proximity &&
        event.x < CARD_BOUNDS.left + CARD_BOUNDS.width + CONFIG.proximity &&
        event.y > CARD_BOUNDS.top - CONFIG.proximity &&
        event.y < CARD_BOUNDS.top + CARD_BOUNDS.height + CONFIG.proximity
      ) {
        // If within proximity set the active opacity
        card.style.setProperty('--active', '1');
      } else {
        card.style.setProperty('--active', CONFIG.opacity.toString());
      }
      const CARD_CENTER = [
        CARD_BOUNDS.left + CARD_BOUNDS.width * 0.5,
        CARD_BOUNDS.top + CARD_BOUNDS.height * 0.5
      ];
      let ANGLE =
        (Math.atan2(event?.y - CARD_CENTER[1], event?.x - CARD_CENTER[0]) * 180) / Math.PI;
      ANGLE = ANGLE < 0 ? ANGLE + 360 : ANGLE;
      card.style.setProperty('--start', (ANGLE + 90).toString());
    };

    document.body.addEventListener('pointermove', update);

    return () => {
      document.body.removeEventListener('pointermove', update);
    };
  }, []);

  return (
    <article ref={ref} className={styles.article}>
      <div className={styles.glows}></div>
      <div
        className={` relative flex w-full flex-col justify-between overflow-hidden rounded-lg
  border-[1px] border-primary-100 bg-primary-50 p-8 md:max-w-[310px] md:p-6 ${className}`}
      >
        <div>
          <h3 className="flex flex-row items-center gap-4 pb-2 text-base font-semibold">{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </article>
  );
}
