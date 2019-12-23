# pubg-api-helper

pubg-api-helper is a library which helps you to interact with official PUBG API https://developer.pubg.com/.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install pubg-api-helper.

```bash
npm install pubg-api-helper
```

## Usage

```javascript
import { APIHelper, Platform } from 'pubg-api-helper';

const api = new APIHelper(
  'YOUR API_KEY',
  Platform.YOUR_PLATFORM
);

//Getting user data and ID using nickname example 
const userDataReq = await api.playerByName('your_username');
const userData = await userDataReq.json();
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
