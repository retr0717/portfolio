"use client";

import CountUp from "react-countup";

const stats = [
  { number: 2, text: "Years of Experience" },
  { number: 30, text: "Projects Completed" },
  { number: 8, text: "Technologies Mastered" },
  { number: 500, text: "Code Commits" },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map(
            (item: { number: number; text: string }, index: number) => {
              return (
                <div
                  key={index}
                  className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                >
                  <CountUp
                    end={item.number}
                    duration={5}
                    delay={2}
                    className="text-4xl xl:text-6xl font-extrabold"
                  />
                  <p
                    className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}
                  >
                    {item.text}
                  </p>
                </div>
              );
            },
          )}
        </div>
      </div>
    </section>
  );
};

export default Stats;
