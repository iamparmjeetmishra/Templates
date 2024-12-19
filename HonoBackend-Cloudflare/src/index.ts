import { serve } from "@hono/node-server";

import app from "./app";
import env from "./env";

const port = env.PORT;

// eslint-disable-next-line no-console
console.log(`Server is running on http://localhost:${env.PORT}`);

serve({
  fetch: app.fetch,
  port,
});