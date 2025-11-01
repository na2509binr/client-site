import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;
    const folderName = formData.get("folder")?.toString() || "default";

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Convert file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Date folders
    const now = new Date();
    const year = now.getFullYear().toString();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");

    // Create folder path
    const uploadDir = path.join(
      process.cwd(),
      "public",
      "uploads",
      folderName,
      year,
      month,
      day
    );

    await mkdir(uploadDir, { recursive: true });

    // Create file name
    const fileName = `${Date.now()}-${file.name}`;
    const filePath = path.join(uploadDir, fileName);

    // Save file physically
    await writeFile(filePath, buffer);

    // FE-accessible URL
    const url = `/uploads/${folderName}/${year}/${month}/${day}/${fileName}`;

    return NextResponse.json({ url });
  } catch (err) {
    console.error("Upload error:", err);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
