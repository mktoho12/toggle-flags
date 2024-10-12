import { useReducer } from 'react'

// フラグの型
export type Flags<U extends string> = {
  [K in U]: boolean
}

export const useToggleFlags = <T extends readonly string[]>(names: T) => {
  type FlagName = T[number] // 名前のユニオン型
  type NamedFlags = Flags<FlagName> // 名前に紐づいたフラグ

  // 初期状態のフラグをオブジェクトとして作成
  const initialFlags = Object.fromEntries(
    names.map((name) => [name, false]),
  ) as NamedFlags

  // フラグの状態を切り替える関数
  const toggleFlag = (state: NamedFlags, action: FlagName): NamedFlags => ({
    ...state,
    [action]: !state[action], // 対象のフラグを反転
  })

  // useReducerを使って状態とディスパッチ関数を返す
  const [flags, dispatch] = useReducer(toggleFlag, initialFlags)

  // フラグを切り替える関数をラップして返す
  const toggle = (name: FlagName) => dispatch(name)

  return { flags, toggle }
}
