export const addComma = (price:any):string => {
   return price.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
}