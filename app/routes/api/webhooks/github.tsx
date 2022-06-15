import type { ActionFunction } from "@remix-run/node"; // or "@remix-run/cloudflare"
import { json } from "@remix-run/node"; // or "@remix-run/cloudflare"
import crypto from "crypto";

export const action: ActionFunction = async ({
  request,
}) => {
  if (request.method !== "POST") {
    return json({ message: "Method not allowed" }, 405);
  }
  const payload = await request.json();

  /* Validate the webhook */
  const signature = request.headers.get(
    "X-Hub-Signature-256"
  );
  const generatedSignature = `sha256=${crypto
    .createHmac("sha256", process.env.GITHUB_WEBHOOK_SECRET ?? '')
    .update(JSON.stringify(payload))
    .digest("hex")}`;
  if (signature !== generatedSignature) {
    return json({ message: "Signature mismatch" }, 401);
  }

  /* process the webhook (e.g. enqueue a background job) */

  return json({ success: true }, 200);
};