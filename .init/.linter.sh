#!/bin/bash
cd /home/kavia/workspace/code-generation/recipe-explorer-160079-160098/frontend_web_app
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

