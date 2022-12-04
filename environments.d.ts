declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_CHAIN_ID: number | undefined
    }
  }
}
