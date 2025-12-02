// app/api/upload/route.ts
import { NextRequest, NextResponse } from "next/server";
import { saveFileToPublic } from "@/app/utils/file";

export async function POST(req: NextRequest) {
  const data = await req.formData();
  const file = data.get("file") as File;

  if (!file) return NextResponse.json({ error: "No file uploaded" }, { status: 400 });

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = `${Date.now()}-${file.name}`;

  const publicPath = saveFileToPublic("uploads", filename, buffer);

  return NextResponse.json({ url: publicPath });
}
