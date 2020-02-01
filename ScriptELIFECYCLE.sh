echo "Solucionador del error ese de mierda."

echo "Limpiando cache del proyecto..."
npm cache clean --force

echo "Borrando modulos..."
rm -rf node_modules 
rm package-lock.json

echo "Descargando librerias del proyecto..."
npm install --save

echo "ALE, SOLUCIONADO."
echo "Ahora ya puedes usar npm start con normalidad"

