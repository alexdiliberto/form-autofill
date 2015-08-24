#!/bin/bash

rm -rf dist tmp src/chance.js
broccoli build dist

echo 'Build complete...'
