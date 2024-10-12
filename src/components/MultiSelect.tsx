'use client'

import { useToggleFlags } from '@/hooks/useToggleFlags'

interface Props {
  items: readonly string[]
}

export function MultiSelect({ items }: Props) {
  const { flags, toggle } = useToggleFlags(items)

  return (
    <>
      <ul className="flex flex-col gap-2 text-xl">
        {items.map(item => (
          <li
            key={item}
            onClick={() => toggle(item)}
            className="flex gap-2 cursor-pointer"
          >
            <span>{flags[item] ? '✅' : '🟩'}</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="whitespace-pre font-mono text-green-300 bg-slate-900 p-2">
        {JSON.stringify(flags, null, 2)}
      </div>
      <a href="/aaa">aaa</a>
    </>
  )
}
