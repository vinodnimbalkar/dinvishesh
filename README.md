# DinVishesh

#### A simple NPM Package which returns dinvishesh (On This Day in History). Get your daily dinvishesh and increase knowledge!

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).

Installation is done using the
**[`npm install`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)** command:

```bash
$ npm install --save dinvishesh
```

## Usage

- **_dinVisheshToday()_** method returns an object containing **_janm_**, **_janm_** and **_ghatana_** of current Date like `new Date()`.

```json
{
  "janm": [
    "१८८१: स्पॅनिश चित्रकार आणि शिल्पकार पाब्लो पिकासो यांचा जन्म. (मृत्यू: ८ एप्रिल १९७३)",
    "१९३७: संगीत समीक्षक डॉ. अशोक रानडे यांचा जन्म. (मृत्यू: ३० जुलै २०११)"
  ],
  "mrutyu": [
    "१९५५: शास्त्रीय गायक पं. दत्तात्रय विष्णू ऊर्फ बापूराव पलुसकर यांचे निधन. (जन्म: २८ मे १९२१)",
    "१९६०: फर्ग्युसन कंपनी चे संस्थापक हॅरी फर्ग्युसन यांचे निधन. (जन्म: ४ नोव्हेंबर १८८४)"
  ],
  "ghatana": [
    "१९६२: युगांडाचा संयुक्त राष्ट्रांत (United Nations) प्रवेश.",
    "१९९४: ए. एम. अहमदी यांनी भारताचे २६ वे सरन्यायाधीश म्हणुन कार्यभार सांभाळला."
  ]
}
```

- **_dinVishesh(category, month, day)_** method take three parameter, which are optional.
  - _category_ - **_janm_** | **_janm_** | **_ghatana_** (Default to **_janm_**)
  - _month_ - any month in lowercase e.g. `january` in string format
  - _day_ - any valid date related to month e.g. `11` in string format, it reurn array of string.

```json
[
  "१८१५: कॅनडाचे पहिले पंतप्रधान जॉन ए. मॅकडोनाल्ड यांचा जन्म. (मृत्यू: ६ जून १८९१)",
  "१८५८: हिंदी साहित्यिक श्रीधर पाठक यांचा जन्म. (मृत्यू: १३ सप्टेंबर १९२६)",
  "१८५९: ब्रिटिश मुत्सद्दी आणि भारताचे व्हॉइसराय लॉर्ड कर्झन यांचा जन्म. (मृत्यू: २० मार्च १९२५)",
  "१८९८: ज्ञानपीठ विजेते साहित्यिक वि. स. खांडेकर यांचा जन्म.",
  "१९४४: झारखंडचे ७ वे मुख्यमंत्री आणि खासदार शिबू सोरेन यांचा जन्म.",
  "१९५५: उपशास्त्रीय व नाट्यसंगीत गायिका आशा खाडिलकर यांचा जन्म.",
  "१९७३: क्रिकेटपटू खेळाडू द. ग्रेट इंडियन वॉल राहुल द्रविड यांचा जन्म."
]
```

- **_dinVisheshByCategory(category)_** method take one parameter **_janm_** or **_mrutyu_** or **_ghatana_** in string format and returns an object containing months.

```json
{
  "january": [Object],
  "february": [Object],
  "march": [Object],
  "april": [Object],
  "may": [Object],
  "june": [Object],
  "july": [Object],
  "august": [Object],
  "september": [Object],
  "october": [Object],
  "november": [Object],
  "december": [Object]
}
```

- **_dinVisheshAll()_** method returns an object containing category.

```json
{
  "category": {
    "janm": {
      "january": [Object],
      "february": [Object],
      "march": [Object],
      "april": [Object],
      "may": [Object],
      "june": [Object],
      "july": [Object],
      "august": [Object],
      "september": [Object],
      "october": [Object],
      "november": [Object],
      "december": [Object]
    },
    "mrutyu": {
      "january": [Object],
      "february": [Object],
      "march": [Object],
      "april": [Object],
      "may": [Object],
      "june": [Object],
      "july": [Object],
      "august": [Object],
      "september": [Object],
      "october": [Object],
      "november": [Object],
      "december": [Object]
    },
    "ghatana": {
      "january": [Object],
      "february": [Object],
      "march": [Object],
      "april": [Object],
      "may": [Object],
      "june": [Object],
      "july": [Object],
      "august": [Object],
      "september": [Object],
      "october": [Object],
      "november": [Object],
      "december": [Object]
    }
  }
}
```

## Examples

To view the examples, clone the **dinvishesh** repo and install the dependencies:

```bash
$ git clone https://github.com/vinodnimbalkar/dinvishesh.git
$ cd example
$ npm install
```

Then run the **demo.js**:

```bash
$ node demo.js
```

## Contributing

Feel free to open an issue (or even better, send a Pull Request) for expanding this list. Contributions are very welcome!! 😄

<a href="https://www.buymeacoffee.com/vinodnimbalkar" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

## License

**MIT &copy; [Vinod Nimbalkar](https://github.com/vinodnimbalkar/dinvishesh/blob/master/LICENSE)**
