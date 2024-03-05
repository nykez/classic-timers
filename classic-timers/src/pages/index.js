import Image from "next/image";
import { Inter } from "next/font/google";
import Calendar from "@/components/_calendar";
import TimedEvent from "@/components/_timers";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center p-5 ${inter.className}`}>
        <h1 className="font-bold sm:text-2xl md:text-4xl mb-2">Simple SoD Timers (US - Living Flame)</h1>
        <div className="bg-neutral-800/50 border border-neutral-600 border-1 sm:w-full md:w-3/12 rounded-lg p-5 m-2">
                <div className="flex justify-between gap-4">
                    <TimedEvent inProgressEvent={9000} startTime={1707260400-3600} name="STV Event"/>
                    <TimedEvent startTime={1707260400} name="Ashenvale"/>
                </div>
            </div>
        <Calendar/>
    </main>
  );
}
