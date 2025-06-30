
import PixelButton from './PixelButton';

type ControlPanelProps = {
  isRunning: boolean;
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
};

const ControlPanel = ({
  isRunning,
  onStart,
  onStop,
  onReset,
}: ControlPanelProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-6 sm:mt-8 w-full max-w-sm mx-auto">
      {!isRunning ? (
        <PixelButton onClick={onStart} variant="primary">
          START
        </PixelButton>
      ) : (
        <PixelButton onClick={onStop} variant="secondary">
          STOP
        </PixelButton>
      )}
      <PixelButton onClick={onReset} variant="danger">
        RESET
      </PixelButton>
    </div>
  );
};

export default ControlPanel;
