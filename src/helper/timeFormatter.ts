// YYYY-MM-DDTHH:mm:ss.sssZ -> hh:mm

export const timeFormatter = (input: string): string => {
  const [hh, mm] = input.split("T")[1].split(":");
  return `${hh}:${mm}`;
};
