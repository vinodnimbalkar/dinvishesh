# DinVishesh

[![Build Status](https://travis-ci.org/vinodnimbalkar/dinvishesh.svg?branch=master)](https://travis-ci.org/vinodnimbalkar/dinvishesh)
[![Coverage Status](https://coveralls.io/repos/github/vinodnimbalkar/dinvishesh/badge.svg?branch=master)](https://coveralls.io/github/vinodnimbalkar/dinvishesh?branch=master)

A Node.js package that provides "On This Day in History" (dinvishesh) information in Marathi. Get historical events, births, and deaths for any date to enhance your knowledge of Indian history and culture.

## Features

- Get historical data for any specific date
- Three categories of information:
  - **Janm** (Births) - Notable personalities born on a date
  - **Mrutyu** (Deaths) - Notable personalities who passed away on a date
  - **Ghatana** (Events) - Significant historical events that occurred on a date
- Flexible API with multiple ways to query data
- Data available in Marathi language
- Zero dependencies

## Installation

```bash
npm install dinvishesh
```

## API Reference

### 1. dinVisheshToday()

Returns historical information for the current date.

```javascript
const dinvishesh = require('dinvishesh');
const today = dinvishesh.dinVisheshToday();
```

Example response:
```javascript
{
  "janm": [
    "१८८१: स्पॅनिश चित्रकार आणि शिल्पकार पाब्लो पिकासो यांचा जन्म.",
    "१९३७: संगीत समीक्षक डॉ. अशोक रानडे यांचा जन्म."
  ],
  "mrutyu": [...],
  "ghatana": [...]
}
```

### 2. dinVishesh(category, month, day)

Retrieve historical information for a specific date and category.

**Parameters:**
- `category` (optional): 'janm', 'mrutyu', or 'ghatana' (default: 'janm')
- `month` (optional): Month name in lowercase English (e.g., 'january')
- `day` (optional): Day of month as string (e.g., '25')

```javascript
const births = dinvishesh.dinVishesh('janm', 'january', '11');
```

### 3. dinVisheshByCategory(category)

Get all entries for a specific category organized by month.

**Parameters:**
- `category`: 'janm', 'mrutyu', or 'ghatana'

```javascript
const allBirths = dinvishesh.dinVisheshByCategory('janm');
```

### 4. dinVisheshAll()

Retrieve the complete database of historical information.

```javascript
const completeData = dinvishesh.dinVisheshAll();
```

## Usage Examples

```javascript
const dinvishesh = require('dinvishesh');

// Get today's historical events
const today = dinvishesh.dinVisheshToday();
console.log('Today in history:', today.ghatana);

// Get births on a specific date
const births = dinvishesh.dinVishesh('janm', 'january', '11');
console.log('Born on January 11:', births);

// Get all deaths by month
const deaths = dinvishesh.dinVisheshByCategory('mrutyu');
console.log('Deaths in January:', deaths.january);
```

For more examples, check the `examples` directory in the repository:

```bash
git clone https://github.com/vinodnimbalkar/dinvishesh.git
cd dinvishesh/example
npm install
node demo.js
```

## Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure your PR includes appropriate tests and documentation updates.

## Support the Project

If you find this package useful, consider supporting the development:

<a href="https://www.buymeacoffee.com/vinodnimbalkar" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

## License

MIT © [Vinod Nimbalkar](https://github.com/vinodnimbalkar/dinvishesh/blob/master/LICENSE)
