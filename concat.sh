#!/bin/bash

echo "" > findingfeynman.js

for f in `find ./src/ -type f -not -name "main.js"`
do
	printf "\n// starting file: "$f"\n" >> findingfeynman.js
    cat $f >> findingfeynman.js
done

printf "\n// starting file: main.js \n\n" >> findingfeynman.js
cat src/main.js >> findingfeynman.js