
export function toTimeString(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const hoursPad = hours < 10 ? "0" : "";
  const mins = Math.floor((seconds % 3600) / 60);
  const minsPad = mins < 10 ? "0" : "";

  return hoursPad + hours + ":" + minsPad + mins;
}

7200
