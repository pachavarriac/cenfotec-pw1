#!/bin/bash

# Verificar si ImageMagick está instalado
if ! command -v identify &> /dev/null; then
    echo "Error: 'identify' (ImageMagick) no está instalado."
    echo "Instálalo con: sudo apt install imagemagick"
    exit 1
fi

# Directorio de imágenes
DIR="logos"

# Verificar si el directorio existe
if [ ! -d "$DIR" ]; then
    echo "Error: El directorio '$DIR' no existe."
    exit 1
fi

# Inicializar suma total
total_width=0
count=0

# Procesar cada imagen en el directorio
for image in "$DIR"/*; do
    # Verificar si es un archivo (no directorio)
    if [ -f "$image" ]; then
        # Obtener ancho de la imagen
        width=$(identify -format "%w" "$image" 2>/dev/null)
        
        # Si se pudo obtener el ancho, sumarlo
        if [ -n "$width" ]; then
            total_width=$((total_width + width))
            count=$((count + 1))
            echo "Procesada: $image | Ancho: $width píxeles"
        else
            echo "Advertencia: No se pudo obtener el ancho de '$image' (¿formato no soportado?)"
        fi
    fi
done

# Mostrar resultados
echo "----------------------------------"
echo "Total de imágenes procesadas: $count"
echo "Suma total de anchos: $total_width píxeles"
