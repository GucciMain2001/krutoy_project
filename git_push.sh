#!/bin/bash

echo "Начинаем добавлять изменения"
git add .
git status
git commit -m "$1"

git push origin main