
export const processDate = (date:string): string => (date.slice(0, 16).replaceAll('-', '/').replaceAll('T', ' '))