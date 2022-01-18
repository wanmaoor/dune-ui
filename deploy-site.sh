#!/bin/env bash
yarn build-site && git add static-site && git commit -m "update doc" && git push
