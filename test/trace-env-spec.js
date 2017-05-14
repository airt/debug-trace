import test from 'ava'
import sinon from 'sinon'
import { traceUsing } from '../lib/trace'

test.before(t => {
  process.env.NODE_ENV = 'production'
})

test('trace in production environment', t => {
  const log = sinon.spy()

  const ms = ['trace', 'message']
  const x = { k: 'v' }

  const r = traceUsing(log)(...ms)(x)

  t.is(x, r)
  t.false(log.called)
})
