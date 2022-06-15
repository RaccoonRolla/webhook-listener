import type { ActionFunction } from "@remix-run/node"; // or "@remix-run/cloudflare"
import { json } from "@remix-run/node"; // or "@remix-run/cloudflare"
import crypto from "crypto";

export const action: ActionFunction = async ({
  request,
}) => { 
  console.log(request)

  return {}
};

export default function Github() {
  return null
}