"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const upperStroke = "M80 178V88Q80 66 100 66L114 72L300 258H372V96";
const lowerStroke = "M80 396V228H172L368 424V336";

const upperStub = "M300 76V212";
const lowerStub = "M150 416V262";

// One line from each end of the N, out into the background.
const traces = [
  { d: "M300 52V-400", length: 452, delay: 0.5 },
  { d: "M370 52V34L412 -8H1400", length: 1050, delay: 3 },
  { d: "M394 318H470L530 258H1400", length: 1030, delay: 5 },
  { d: "M378 434L440 496H1400", length: 1050, delay: 1.5 },
  { d: "M150 440V800", length: 360, delay: 4 },
  { d: "M80 440V470L20 530H-30", length: 165, delay: 2.5 },
  { d: "M56 180H-30", length: 86, delay: 6 },
];

const traceEnds = [
  [-30, 530],
  [-30, 180],
];

function Pulse({ d, duration, delay, dash = 0.06 }: { d: string; duration: number; delay: number; dash?: number }) {
  return (
    <motion.path
      d={d}
      pathLength={1}
      fill="none"
      stroke="#A5F0FF"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeDasharray={`${dash} ${1 - dash}`}
      initial={{ strokeDashoffset: 1 }}
      animate={{ strokeDashoffset: 0 }}
      transition={{ duration, delay, repeat: Infinity, ease: "linear" }}
    />
  );
}

export default function AnimatedNWatermark() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="absolute top-1/2 -translate-y-1/2 -right-10 lg:right-8 w-52 lg:w-[340px] pointer-events-none select-none">
      <Image src="/logo-mark.svg" alt="" width={340} height={375} unoptimized className="h-auto w-full opacity-[0.12]" />
      <svg
        viewBox="30 30 390 430"
        className="absolute inset-0 h-full w-full overflow-visible"
        aria-hidden="true"
        focusable="false"
      >
        <g fill="none" stroke="#38ADF3" strokeWidth={1.25} strokeLinejoin="round" opacity={0.3}>
          {traces.map(({ d }) => (
            <path key={d} d={d} />
          ))}
          {traceEnds.map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={4} />
          ))}
        </g>
        {!reduceMotion && (
          <g opacity={0.75}>
            <Pulse d={upperStroke} duration={7} delay={0} />
            <Pulse d={lowerStroke} duration={7} delay={2.5} />
            <Pulse d={upperStub} duration={4} delay={1} dash={0.25} />
            <Pulse d={lowerStub} duration={4} delay={3.5} dash={0.25} />
            {traces.map(({ d, length, delay }) => (
              <Pulse key={d} d={d} duration={Math.max(3, length / 110)} delay={delay} dash={Math.min(0.3, 45 / length)} />
            ))}
          </g>
        )}
      </svg>
    </div>
  );
}
