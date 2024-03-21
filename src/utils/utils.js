const capitalizeFirstLetter = string =>
    typeof string === 'string' && string.length > 0
        ? `${string[0].toUpperCase()}${string.slice(1)}`
        : string

module.exports = { capitalizeFirstLetter }