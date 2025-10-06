
import fs from 'fs';
import path from 'path';

export default function parseJson(jsonPath) {
    const absolutePath = path.resolve(jsonPath);
    const fileContent = fs.readFileSync(absolutePath, {encoding: 'utf8'});
    return JSON.parse(fileContent);
}
