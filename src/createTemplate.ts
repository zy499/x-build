import ejs = require("ejs");
import fs = require('fs-extra');
import path = require("path");
import prettier = require("prettier");
import options from "./options";

export default function (templatePath: string) {
  return async function (src: string): Promise<void> {
    const file = path.parse(src);
    const readFilePath = path.resolve(templatePath, file.dir, `${file.name}.ejs`);
    const outputFilePath = path.resolve(templatePath, src);

    const templateCode = await fs.readFile(readFilePath);

    const code = ejs.render(templateCode.toString(), options);
    let extname = path.extname(src).replace(/[.]/g, '');
    if (extname === 'ts') extname = 'typescript';
    if (extname === 'js') extname = 'babel';
    const prettierCode = prettier.format(code, { parser: extname });

    await fs.outputFile(outputFilePath, prettierCode)
    await fs.remove(readFilePath)
  }
}