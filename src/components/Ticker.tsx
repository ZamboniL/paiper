import React, { useEffect, useId, useRef } from 'react';
import { motion } from 'framer-motion';

const TICKER_DIRECTION_LEFT = -1;
const TICKER_DIRECTION_RIGHT = 1;

type TickerProps = {
  children: JSX.Element[];
  duration?: number;
  containerWidth: number;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  direction?: number;
  className?: string;
  style?: React.CSSProperties;
};

export default function Ticker({
  children,
  duration = 10,
  onMouseEnter,
  onMouseLeave,
  direction = TICKER_DIRECTION_LEFT,
  className,
  containerWidth,
  style
}: TickerProps) {
  const tickerId = useId();
  const [tickerContentWidth, setTickerContentWidth] = React.useState(0);

  useEffect(() => {
    if (typeof document === 'undefined') return;

    setTickerContentWidth(
      children.reduce((acc, _, index) => {
        const element = document.getElementById(tickerId + '_' + index)?.clientWidth;

        if (element) {
          return acc + element;
        }

        return acc;
      }, 0)
    );
  }, [children, tickerId]);

  const numDupes =
    tickerContentWidth === 0
      ? 1
      : Math.max(Math.ceil((2 * containerWidth) / tickerContentWidth), 1);

  return (
    <div
      className={`${className ?? ''} h-full w-full overflow-hidden`}
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <motion.ul
        initial={false}
        whileInView={{ x: tickerContentWidth * direction }}
        transition={{ ease: 'linear', duration, repeat: Infinity }}
        className="flex items-center"
      >
        {children.map((item, index) => (
          <li key={`${tickerId}_${index}`} id={`${tickerId}_${index}`}>
            {item}
          </li>
        ))}
        {[...Array(Number.isNaN(numDupes) ? 1 : numDupes)].map((_) =>
          children.map((item, index) => <li key={`${tickerId}_${index}`}>{item}</li>)
        )}
      </motion.ul>
    </div>
  );
}

export { TICKER_DIRECTION_LEFT, TICKER_DIRECTION_RIGHT };
