function formatDuration(secondsToCalc) {
  const s = parseInt(secondsToCalc) // "fool-proofing"
  const [minutes, secondsRemainder] = [~~(s / 60), s % 60]
  const [hours, minutesRemainder] = [~~(minutes / 60), minutes % 60]
  const [days, hoursRemainder] = [~~(hours / 24), hours % 24]
  const [year, daysRemainder] = [~~(days / 365), days % 365]
  console.log(`${year > 0 ? `${year} ${year === 1 ? 'year,' : 'years,'}` : ''} ${daysRemainder > 0 ? `${daysRemainder} ${daysRemainder === 1 ? 'day,' : 'days,'}` : ''} ${hoursRemainder > 0 ? `${hoursRemainder} ${hoursRemainder === 1 ? 'hour,' : 'hours,'}` : ''} ${minutesRemainder > 0 ? `${minutesRemainder} ${minutesRemainder === 1 ? 'minute and' : 'minutes and'}` : ''} ${secondsRemainder > 0 ? `${secondsRemainder} ${secondsRemainder === 1 ? 'second' : 'seconds'}` : ''}`.trim());
  // return `${year > 0 ? `${year} ${year === 1 ? 'year,' : 'years,'}` : ''} ${daysRemainder > 0 ? `${daysRemainder} ${daysRemainder === 1 ? 'day,' : 'days,'}` : ''} ${hoursRemainder > 0 ? `${hoursRemainder} ${hoursRemainder === 1 ? 'hour,' : 'hours,'}` : ''} ${minutesRemainder > 0 ? `${minutesRemainder} ${minutesRemainder === 1 ? 'minute and' : 'minutes and'}` : ''} ${secondsRemainder > 0 ? `${secondsRemainder} ${secondsRemainder === 1 ? 'second' : 'seconds'}` : ''}`.trim()
}

// functionCall(value) // => Expected output

formatDuration("123213213") // => 3 years, 331 days, 1 hour, 53 minutes and 33 seconds
formatDuration(34543534543123) // => 380 years, 159 days, 18 hours, 14 minutes and 43 seconds
formatDuration("35543213") // => 1 year, 46 days, 9 hours, 6 minutes and 53 seconds
formatDuration("61") // => 1 minute and 1 second
formatDuration(90061) // => 1 day, 1 hour, 1 minute and 1 second
