'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function MusicEqualizer() {
  const [bars, setBars] = useState(Array(10).fill(0));

  useEffect(() => {
    const intervalid = setInterval(() => {
      const newBars = bars.map(() => Math.random() * 100);
      setBars(newBars);
    }, 100);

    return () => clearInterval(intervalid);
  }, [bars]);

  return (
    <div className='w-4 h-3 flex justify-center items-end'>
      {bars.map((height, index) => (
        <motion.div
          // biome-ignore lint/suspicious/noArrayIndexKey: ignore
          key={index}
          className='w-2 h-0 bg-green-500 rounded-t-sm'
          style={{ height: `${height}%` }}
          animate={{ height: `${height}%` }}
          transition={{ type: 'spring', stiffness: 100 }}
        />
      ))}
    </div>
  );
}
