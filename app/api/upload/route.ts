import { NextRequest, NextResponse } from "next/server";
import formidable, { File } from "formidable";
import fs from "fs";
import path from "path";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: NextRequest) {
  return new Promise((resolve, reject) => {
    const form = formidable({
      keepExtensions: true,
      multiples: false,
    });

    form.parse(req as any, (err, fields, files) => {
      if (err) {
        resolve(NextResponse.json({ error: "Upload failed" }, { status: 500 }));
        return;
      }

      const file = files.file as unknown as File; // fix type

      const oldPath = file.filepath;
      const fileName = file.originalFilename || file.newFilename;

      const folder = path.join(process.cwd(), "public/uploads");
      if (!fs.existsSync(folder)) fs.mkdirSync(folder, { recursive: true });

      const newPath = path.join(folder, fileName);
      fs.copyFileSync(oldPath, newPath);

      resolve(
        NextResponse.json({
          url: `/uploads/${fileName}`,
        })
      );
    });
  });
}
