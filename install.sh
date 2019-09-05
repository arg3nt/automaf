#!/bin/sh

set -e

echo "Installing React UI dependencies"
cd automaf-ui
npm install

echo "Installing Electron dependencies"
cd ../electron
npm install

# Prime build dir so that `npm start` in the electron app doesn't fail
mkdir build

echo "All dependencies installed!"
echo "To run the electron application, use `start.sh`"
echo "To do UI development, navigate to the automaf-ui directory and use `npm start` to get live reload functionality"
