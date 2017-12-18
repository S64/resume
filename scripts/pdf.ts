import * as fs from 'fs';
import * as pdf from 'html-pdf';
import * as path from 'path';

const html = fs.readFileSync(
  path.join(__dirname, '../dist/index.html'),
  {
    encoding: 'utf8',
  }
);

const options: pdf.CreateOptions = {
  format: 'A4',
  orientation: 'portrait',
  type: 'pdf',
  border: '10mm',
};

pdf.create(html, options).toFile(
  path.join(__dirname, '../dist/index.pdf'),
  (err: Error, res: pdf.FileInfo): void => {
    if (err) {
      throw err;
    }
  }
);
