import { JSDOM } from "jsdom";
import type { binary } from "./index";

function parseBinaries(html: string) {
  const dom = new JSDOM(html);
  const table = dom.window.document.querySelectorAll("#bin-table tbody tr");
  const binaries: binary[] = [];

  table.forEach((element) => {
    const binName = element.querySelector(".bin-name");
    const functionList = element.querySelectorAll(".function-list li a");

    const binaryName = binName.innerHTML;
    const url = binName
      .getAttribute("href")
      .replace("/gtfobins", `${process.env.VERCEL_URL}/api/binary`);

    const functions = Array.from(functionList).map(
      (element) => element.innerHTML
    );

    binaries.push({
      binaryName,
      url,
      functions,
    });
  });

  return binaries;
}

export default parseBinaries;
