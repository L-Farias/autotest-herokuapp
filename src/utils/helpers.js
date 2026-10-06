const { readFile, rm, writeFile, mkdtemp } = require('node:fs/promises');
const { basename, join, resolve } = require('node:path');
const { tmpdir } = require('node:os');

function getEnv(name, fallback) {
  return process.env[name] ?? fallback;
}

function getRequiredEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`A variável de ambiente ${name} é obrigatória.`);
  }
  return value;
}

async function readJsonFile(relativePath) {
  const content = await readFile(resolve(process.cwd(), relativePath), 'utf8');
  return JSON.parse(content);
}

async function createTemporaryFile(fileName, content) {
  const directory = await mkdtemp(join(tmpdir(), 'autotest-herokuapp-'));
  const path = join(directory, basename(fileName));
  await writeFile(path, content, 'utf8');

  return {
    path,
    cleanup: () => rm(directory, { recursive: true, force: true }),
  };
}

module.exports = { getEnv, getRequiredEnv, readJsonFile, createTemporaryFile };