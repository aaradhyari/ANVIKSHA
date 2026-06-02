import { useState, useEffect } from 'react';

export default function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date(targetDate).getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = target - now;
      if (diff <= 0) {
        clearInterval(interval);
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const items = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-4 md:gap-6 justify-center">
      {items.map((item) => (
        <div key={item.label} className="flex flex-col items-center">
          <div className="glass-strong rounded-xl px-4 py-3 md:px-6 md:py-4 min-w-[60px] md:min-w-[80px] text-center glow-border">
            <span className="text-3xl md:text-4xl font-bold text-neon-emerald font-mono-custom">
              {String(item.value).padStart(2, '0')}
            </span>
          </div>
          <span className="text-xs md:text-sm text-silver-mist/70 mt-2 uppercase tracking-wider">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
