# trace-t

[![Build Status][build-badge]][build-status]
[![Test Coverage][coverage-badge]][coverage-result]
[![NPM Version][npm-badge]][npm-url]

functions for tracing and monitoring execution

## installation

`yarn add trace-t`

or

`npm install trace-t --save`

## usage

```ts
import trace from 'trace-t'

const x = 42

const r = trace('x is')(x)

// r === x
```

outputs

```text
x is 42
```

## api

### trace

```ts
trace: (...ms: Array<{}>) => <A>(x: A) => A
```

### traceStack

```ts
traceStack: (...ms: Array<{}>) => <A>(x: A) => A
```

### traceUsing

```ts
traceUsing: (log: Log) => (...ms: Array<{}>) => <A>(x: A) => A
```

where

```ts
type Log = (...xs: Array<{}>) => void
```

## references

[the base package / `Debug.Trace`](http://hackage.haskell.org/package/base-4.9.1.0/docs/Debug-Trace.html)

## license

MIT

[build-badge]: https://img.shields.io/travis/airt/trace-t.svg
[build-status]: https://travis-ci.org/airt/trace-t
[coverage-badge]: https://img.shields.io/coveralls/airt/trace-t.svg
[coverage-result]: https://coveralls.io/github/airt/trace-t
[npm-badge]: https://img.shields.io/npm/v/trace-t.svg
[npm-url]: https://www.npmjs.com/package/trace-t
