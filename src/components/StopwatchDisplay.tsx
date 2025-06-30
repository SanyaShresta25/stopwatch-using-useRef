

const StopwatchDisplay = ({ time }: { time: number }) => {
  const formatTime = (milliseconds: number) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const ms = Math.floor((milliseconds % 1000) / 10);

    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}.${ms.toString().padStart(2, '0')}`;
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="w-full aspect-[5/4] max-w-lg h-auto rounded-3xl bg-gradient-to-br from-blue-400 to-purple-500 p-4 sm:p-6 shadow-2xl">
        <div className="w-full h-full rounded-2xl bg-gradient-to-br from-pink-300 to-yellow-200 p-6 sm:p-8">
          <div className="w-full h-full rounded-xl bg-gradient-to-br from-yellow-100 to-pink-100 flex items-center justify-center">
            <div className="bg-purple-900 text-yellow-200 px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-mono text-3xl sm:text-4xl lg:text-5xl font-bold border-3 sm:border-4 border-purple-700 shadow-lg">
              {formatTime(time)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StopwatchDisplay;
