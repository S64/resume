import * as fs from 'fs';
import * as path from 'path';
import * as pug from 'pug';
import { LocalDate, ChronoUnit, DateTimeFormatter } from 'js-joda';

const result = pug.renderFile(
  path.resolve(__dirname, '../src/index.pug'),
  {
    LocalDate,
    ChronoUnit,
    DateTimeFormatter
  }
);

fs.writeFileSync(
  path.resolve(__dirname, '../dist/index.html'),
  result,
  'utf8'
);
