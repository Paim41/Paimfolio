import { NextResponse } from "next/server"
import { createAdminClient } from "@/lib/supabase-admin"

export const dynamic = "force-dynamic"

export async function GET() {
  try {
    const supabase = createAdminClient()
    const { data } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false })
    return NextResponse.json(data ?? [])
  } catch {
    return NextResponse.json([])
  }
}
