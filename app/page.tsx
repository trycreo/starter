import fs from "fs/promises";
import path from "path";
import {ToolsList} from "@trycreo/ui/core";

import Link from "next/link";

export default async function Home() {
  const cwd = process.cwd();
  const toolsPath = path.join(cwd, "tools");
  let files = await fs.readdir(toolsPath);

  files = files.filter((file) => file !== ".DS_Store");

  return <ToolsList files={files} linkComponent={Link} />;
}
