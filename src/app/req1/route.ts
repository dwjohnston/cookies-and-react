import { NextResponse } from "next/server";
import {hri} from "human-readable-ids"
export async function GET() {
  const x =  NextResponse.json({ error: 'I am req 1 data' }, { status: 200 })
    
  x.cookies.set("some-cookie", hri.random());

  return x;

}
