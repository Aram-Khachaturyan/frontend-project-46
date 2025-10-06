#!/usr/bin/env node
import { Command } from 'commander';
import parseJson from './parse-json.js';
import jsonDiff from 'json-diff';


const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1');

program.option('-f, --format [type]', 'output format');

program.argument('<filepath1>');
program.argument('<filepath2>');

program.action((filePath1, filePath2) => {
  const file1 = parseJson(filePath1);
  const file2 = parseJson(filePath2);
  
  console.log(file1);
  console.log(file2);

  const d = jsonDiff.diffString(file1, file2, {full: true, color: false});

  console.log(d);
});

program.parse();
