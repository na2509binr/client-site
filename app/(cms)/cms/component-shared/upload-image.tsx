import { NextApiRequest, NextApiResponse } from "next";
import { getImagePath } from "@/lib/image-helper";
import fs from "fs";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { fileName, folder } = req.body;

    // Tạo folder & đường dẫn
    const relativePath = getImagePath(folder, fileName);
    const fullPath = `./public${relativePath}`;

    // Giả sử bạn nhận Buffer từ client
    const fileBuffer = Buffer.from(req.body.fileData, "base64");
    fs.writeFileSync(fullPath, fileBuffer);

    res.status(200).json({ path: relativePath });
  }
}
