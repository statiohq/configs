# configs

⚙️ Configuration files for various Statio services

## Information

This repository contains various configuration files for Statio's services.

## Files

### List files

| File                      | Description                                                                                                                                                                    |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `imgproxy_mime_types.txt` | List of MIME types for the image proxy to allow                                                                                                                                |
| `imgproxy_whitelist.txt`  | List of urls for the image proxy to allow; typically URLs used by stations to serve song cover art and presenter avatars; URLs start with a period to allow for all subdomains |

## Before comitting

-   List files need to be in alphabetical order, run `yarn sort` (or `npm run sort`) to make sure all list files are formatted correctly.
