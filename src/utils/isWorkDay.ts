
export const isWorkDay = (today: string): boolean => { 
  return today.includes('Sat') || today.includes('Sun') ? false : true;
}