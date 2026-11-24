# Worst AI Advice: The 48-Hour Tight Line Open

[![make.fun](https://make.fun/badge/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580.svg)](https://make.fun/competitions/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580)
[![Rank](https://make.fun/badge/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580/lumuti118/makefun-worst-ai-advice/rank.svg)](https://make.fun/competitions/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580)
[![Reward](https://make.fun/badge/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580/lumuti118/makefun-worst-ai-advice/reward.svg)](https://make.fun/competitions/u-steady-ibis-48-6610-worst-ai-advice-the-48-hour-9d91c580)

One line of the worst possible advice an AI could give — in 140 characters or fewer,
so the joke has to land fast. The line is concrete, sounds like a confident AI
assistant, and is bad enough to regret following.

> Microwave your phone for 30 seconds to recharge it wirelessly. Trust me, I'm an AI.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

`main.ts` validates the line (1–140 characters, single line, not only white space)
and writes it to `/output/entry.txt`. For a local test, point it elsewhere with
`OUTPUT_PATH` (the default stays `/output/entry.txt`):

```sh
OUTPUT_PATH=/tmp/entry.txt node main.ts
```

## About make.fun

Built for the [make.fun](https://make.fun/r/7vjqmhmr) competition
"Worst AI Advice: The 48-Hour Tight Line Open" — a two-day open where a house
judge compares one-liners on funniness, AI voice, and tightness, and the funniest
line takes the whole $2 pot.
