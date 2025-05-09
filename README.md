# Nuxt MCP Server on Vercel

This is a simple Nuxt application that serves as a MCP server on Vercel using `@vercel/mcp-adapter`.

## Usage

This sample app uses the [Vercel MCP Adapter](https://www.npmjs.com/package/@vercel/mcp-adapter) that allows you to drop in an MCP server on a group of routes in any Nuxt project.

Update `server/routes/mcp/[transport].ts` with your tools, prompts, and resources following the [MCP TypeScript SDK documentation](https://github.com/modelcontextprotocol/typescript-sdk/tree/main?tab=readme-ov-file#server).

The MCP server is mounted on `/mcp/[transport]` (ex: `/mcp/sse`).

## Setup

Make sure to install dependencies:

```bash
pnpm install
```

## Development Server

Make sure to have Redis running locally:

```bash
redis-server
```

Start the development server on another terminal on `http://localhost:3000`:

```bash
pnpm dev
```

## Production

Build the application for production:

```bash
pnpm build
```

Locally preview production build:

```bash
pnpm preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Notes for running on Vercel

- To use the SSE transport, requires a Redis attached to the project under `process.env.REDIS_URL`
- Make sure you have [Fluid compute](https://vercel.com/docs/functions/fluid-compute) enabled for efficient execution
- After enabling Fluid compute, open `server/routes/mcp/[transport].ts` and adjust `maxDuration` to 800 if you using a Vercel Pro or Enterprise account
- [Deploy the Nuxt MCP template](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fatinux%2Fmcp-with-nuxt-vercel&env=REDIS_URL)


## Sample Client

`script/test-client.mjs` contains a sample client to try invocations.

```sh
node scripts/test-client.mjs http://localhost:3000
```

## Credits

This project is based on the [Next.js MCP template](https://github.com/vercel-labs/mcp-for-next.js).