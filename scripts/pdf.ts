import * as fs from 'fs';
import * as pdf from 'html-pdf';
import * as path from 'path';

const filePath = path.resolve(__dirname, '../dist/index.html');

const html = fs.readFileSync(
  filePath,
  {
    encoding: 'utf8',
  }
);

const options: pdf.CreateOptions = {
  format: 'A4',
  orientation: 'portrait',
  type: 'pdf',
  border: '10mm',
  base: 'file://' + filePath,
};

pdf.create(html, options).toFile(
  path.resolve(__dirname, '../dist/index.pdf'),
  (err: Error, res: pdf.FileInfo): void => {
    if (err) {
      throw err;
    }
  }
);
