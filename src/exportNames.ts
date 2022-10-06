import fs from 'fs-extra';
import path from 'path';

const jsonDir = path.join(process.cwd(), 'json');
const jsonFileName = 'symbols-names.json';


export const generateJsonNames = (iconNames: string[]) => {
  fs.ensureDirSync(jsonDir);
  fs.emptyDirSync(jsonDir);

  //write file
  fs.writeFileSync(path.join(jsonDir, jsonFileName), JSON.stringify(iconNames));
}