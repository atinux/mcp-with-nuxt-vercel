import { createMcpHandler } from '@vercel/mcp-adapter'
import { z } from 'zod'

const handler = createMcpHandler(
  (server) => {
    server.tool(
      'echo',
      'Echo a message',
      { message: z.string() },
      async ({ message }) => ({
        content: [{ type: 'text', text: `Tool echo: ${message}` }]
      })
    )
  },
  {
    capabilities: {
      tools: {
        echo: {
          description: 'Echo a message'
        }
      }
    }
  },
  {
    redisUrl: process.env.REDIS_URL,
    basePath: '/mcp',
    verboseLogs: true,
    maxDuration: 60
  }
)

export default fromWebHandler(handler)
