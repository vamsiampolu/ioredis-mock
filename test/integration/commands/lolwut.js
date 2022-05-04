import Redis from 'ioredis'

// eslint-disable-next-line import/no-relative-parent-imports
import { runTwinSuite } from '../../../test-utils'

runTwinSuite('lolwut', command => {
  describe(command, () => {
    const redis = new Redis()

    afterAll(() => {
      redis.disconnect()
    })

    test('should just return Redis ver 7.0.0 on invalid arguments', async () => {
      const result = await redis[command]('ver', 5)
      expect(Buffer.isBuffer(result) ? result.toString() : result).toMatch(
        'Redis ver. 7.0.0'
      )
    })

    test('should return Redis ver 7.0.0 by default', async () => {
      const result = await redis[command]()
      expect(Buffer.isBuffer(result) ? result.toString() : result).toMatch(
        'Redis ver. 7.0.0'
      )
    })

    test('version 6', async () => {
      const result = await redis[command]('version', 6, 20, 10)
      expect(Buffer.isBuffer(result) ? result.toString() : result).toMatch(
        'hikikomori'
      )
    })

    test('version 5', async () => {
      const result = await redis[command]('version', 5, 20, 10)
      expect(Buffer.isBuffer(result) ? result.toString() : result).toMatch(
        'schotter'
      )
    })
  })
})
