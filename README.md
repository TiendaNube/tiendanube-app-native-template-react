# Nuvemshop react frontend native template for Native Apps

![License](https://img.shields.io/badge/license-MIT-blue)

Welcome to the repository for the React Native interface of Nuvemshop initial native app templates. This repository serves as a submodule for specific app templates, providing a starting point for development.

## Developer Resources

Here you will find essential resources to kickstart Nuvemshop native app development:

- [Introduction to Nuvemshop Apps](https://dev.nuvemshop.com.br/en/docs/getting-started)
- [App Authentication](https://dev.nuvemshop.com.br/en/docs/applications/overview#authenticating-your-application)
- [Nexo](https://dev.nuvemshop.com.br/en/docs/developer-tools/nexo)
- [Nimbus](https://dev.nuvemshop.com.br/en/docs/developer-tools/nimbus)
- [Nuvemshop API Library Documentation](https://dev.nuvemshop.com.br/en/docs/developer-tools/nuvemshop-api/)

## Configuring the project

To successfully integrate with our apis, it is necessary to make some settings in the `.env` environment variables file, for this it is necessary to rename the `.env.example` file to `.env` in the root of the `frontend` folder.

```bash
# Address where your api is running
VITE_API_URL=
```

It is also necessary to prepare our local database for this and rename the `db.example.json` file to `db.json` in the root of the `api` folder.

## Authentication

- To authenticate the app, you need to modify its redirect URL in the Partners Portal to the API URL and install it in a store. This will ensure that when the authentication process is triggered, the app will be redirected to the designated URL, including the necessary 'code' query string. The 'code' parameter is essential for constructing the body of the POST request to the `https://www.tiendanube.com/apps/authorize/token` authentication API. Upon successful authentication, the API will respond with an object that should be securely stored within the 'credentials' property of the db.json file.

## Limitations and Considerations

- The `db.json` file simply stores the credentials of a store, and when the installation process is repeated, the old object is replaced by the new one.
- It is necessary to rename the `.env-example` file to `.env` and configure the environment variables with the requested values; otherwise, it will not work.
- If you don't change the redirect URL in the Partners Portal to the port where the project is running, it won't be possible to authenticate the app or access the Product API.
- For the Product API to work, the app must have `Write products` permission. [Learn more about permissions](https://dev.nuvemshop.com.br/en/docs/developer-tools/nuvemshop-api#accessing-the-product-api)

## References and Additional Resources

- [Authentication](https://dev.nuvemshop.com.br/en/docs/applications/authentication)
- [Nuvemshop/Tiendanube API - Product](https://dev.nuvemshop.com.br/en/docs/developer-tools/nuvemshop-api#accessing-the-product-api)
- If you have any questions or need further assistance, please don't hesitate to reach out to us through the Help section of the Partners Portal.
