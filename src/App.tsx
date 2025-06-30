import { useState, useEffect, useRef } from 'react';
import StopwatchDisplay from './components/StopwatchDisplay';
import ControlPanel from './components/ControlPanel';

const App = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(0);
  const accumulatedTimeRef = useRef<number>(0);

  useEffect(() => {
    if (isRunning) {
      startTimeRef.current = Date.now();
      intervalRef.current = setInterval(() => {
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTimeRef.current;
        setTime(accumulatedTimeRef.current + elapsedTime);
      }, 10);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);

  const handleStop = () => {
    setIsRunning(false);
    accumulatedTimeRef.current = time;
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    accumulatedTimeRef.current = 0;
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 flex flex-col items-center justify-center p-4 sm:p-8 relative overflow-hidden">
      
      {/* Pattern background */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-dots-pattern bg-dots" />
      </div>

      {/* Stopwatch content */}
      <div className="relative z-10 w-full max-w-2xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-purple-900 mb-6 sm:mb-8 text-center font-mono tracking-widest text-shadow">
          STOPWATCH
        </h1>

        <div className="flex flex-col items-center">
          <StopwatchDisplay time={time} />
          <ControlPanel
            isRunning={isRunning}
            onStart={handleStart}
            onStop={handleStop}
            onReset={handleReset}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
