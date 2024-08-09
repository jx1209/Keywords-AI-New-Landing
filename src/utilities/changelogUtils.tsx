import fs from 'fs';
import path from 'path';

export function getChangelogs() {
  const logsDirectory = path.join(process.cwd(), 'src/app/change_logs');
  const filenames = fs.readdirSync(logsDirectory);
  const logs = filenames.map(filename => {
    const filePath = path.join(logsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  });

  // Sort logs by date
  return logs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}