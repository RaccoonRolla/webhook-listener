import type { ActionFunction } from "@remix-run/node"; // or "@remix-run/cloudflare"
import { json } from "@remix-run/node"; // or "@remix-run/cloudflare"
import { useActionData } from "@remix-run/react";
import crypto from "crypto";

export const action: ActionFunction = async ({
  request,
}) => { 
  console.log(await request.json())

  return json({request: request}, 200)
};

export default function Github() {
  const data = useActionData()
  console.log(data)
  return null
}