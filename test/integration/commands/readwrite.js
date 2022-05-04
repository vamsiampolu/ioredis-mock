import Redis from 'ioredis'

// eslint-disable-next-line import/no-relative-parent-imports
import { runTwinSuite } from '../../../test-utils'

runTwinSuite('readwrite', command => {
  describe(command, () => {
    it('should return an error', async () => {
      expect.hasAssertions()
      const redis = new Redis()

      try {
        await redis[command]()
      } catch (e) {
        expect(e.message).toEqual(
          'ERR This instance has cluster support disabled'
        )
      }

      redis.disconnect()
    })
  })
})
