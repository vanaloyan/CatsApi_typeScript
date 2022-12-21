export const actualPathnameUrl = (
  data: any,
  path: string = ""
): string | undefined => {
  if (data.length > 0) {
    return data?.find((item: any) => item.name === path.slice(1)).url;
  }
};
