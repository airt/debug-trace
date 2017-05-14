type Log = (...xs: Array<{}>) => void

export const traceUsing =
  (log: Log) => (...ms: Array<{}>) => <A>(x: A): A => {
    if (process.env.NODE_ENV !== 'production') {
      log(...ms, x)
    }
    return x
  }

export const trace = traceUsing(console.log)

export const traceStack = traceUsing(console.trace)

export default trace
