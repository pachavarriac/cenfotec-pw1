#!/bin/bash

find . -type f -name "*.png" | while read -r file; do
    base_name="${file%.png}"
    mv "$file" "${base_name}-b.png"
    echo "Renombrado: $file -> ${base_name}-b.png"
done

echo "Proceso completado."