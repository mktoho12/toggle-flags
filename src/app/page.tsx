'use client'

import { MultiSelect } from '@/components/MultiSelect'

export default function Home() {
  const tastes = ['しょうゆ', 'みそ', 'とんこつ'] as const

  return (
    <main className="max-w-screen-md mx-auto mt-8 flex flex-col gap-4">
      <h1 className="text-3xl font-bold">名前付きフラグ</h1>
      <MultiSelect items={tastes} />
    </main>
  )
}
