import { JSDOM } from "jsdom";
import type { code } from "./index";

function parseFunctions(html: string) {
  const dom = new JSDOM(html).window.document;
  const functionList = Array.from(dom.querySelectorAll(".function-list li a"));
  const codes: code[] = [];

  const functions = functionList.map((element: Element) => element.innerHTML);

  functions.forEach((func) => {
    const funcName = func.toLowerCase().replace(" ", "-");
    const code = dom.querySelector(`#${funcName} ~ ul pre code`).innerHTML;

    codes.push({
      code,
      func,
    });
  });

  return codes;
}

export default parseFunctions;
