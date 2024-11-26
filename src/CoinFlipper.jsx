import { useState } from 'react';
import { Coins } from 'lucide-react';

export default function CoinFlipper() {
    const [result, setResult] = useState(null);
    const [isFlipping, setIsFlipping] = useState(false);

    const flip = (forcedResult) => {
        if (isFlipping) return;

        setIsFlipping(true);
        setResult(null);

        setTimeout(() => {
            setResult(forcedResult);
            setIsFlipping(false);
        }, 1000);
    };

    return (
        <div className="flex flex-col items-center w-full max-w-2xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6">Coin Flipper</h1>

            {/* Result display */}
            <div className="mb-8 h-[100px] flex items-center justify-center">
                {isFlipping ? (
                    <div className="animate-spin">
                        <Coins size={80} />
                    </div>
                ) : (
                    <p className="text-6xl font-bold">
                        {result || <Coins size={80} />}
                    </p>
                )}
            </div>

            {/* Hidden split buttons with unified appearance */}
            <div className="relative w-full h-40">
                {/* Overlay text */}
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <span className="text-white font-bold text-3xl">
            FLIP!
          </span>
                </div>

                {/* Hidden split buttons */}
                <div className="flex w-full h-full">
                    <button
                        onClick={() => flip('HEADS')}
                        className="w-1/2 h-full bg-purple-500"
                        disabled={isFlipping}
                    />
                    <button
                        onClick={() => flip('TAILS')}
                        className="w-1/2 h-full bg-purple-500"
                        disabled={isFlipping}
                    />
                </div>
            </div>

            {/* Instructions */}
            <p className="mt-4 text-gray-600 text-center">
                Click anywhere on the button to flip the coin!
            </p>
        </div>
    );
}
