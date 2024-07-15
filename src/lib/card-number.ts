export const maskCCNumber = (ccNumber: string): string => {
  var cleaned = ('' + ccNumber).replace(/\D/g, '')
  var match = cleaned.match(/^(\d{4})(\d{4})(\d{4})(\d{4})$/)
  if(match) {
    return `**** ${match[4]}`
  }

  return ''
}

export const formatCCNumber = (ccNumber: string): string => {
  var cleaned = ('' + ccNumber).replace(/\D/g, '')
  var match = cleaned.match(/^(\d{4})(\d{4})(\d{4})(\d{4})$/)
  if(match) {
    return `${match[1]} ${match[2]} ${match[3]} ${match[4]}`
  }

  return ''
}