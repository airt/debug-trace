import test from 'ava'
import sinon from 'sinon'
import trace, { traceUsing } from '../lib/trace'

test('trace using', t => {
  const log = sinon.spy()

  const ms = ['trace', 'message']
  const x = { k: 'v' }

  const r = traceUsing(log)(...ms)(x)

  t.is(x, r)
  t.true(log.calledOnce)
  t.true(log.calledWith(...ms, x))
})

test('trace', t => {
  const ms = ['trace', 'message']
  const x = { k: 'v' }

  const r = trace(...ms)(x)

  t.is(x, r)
})
