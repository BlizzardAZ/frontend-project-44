install: # установка зависимостей	
	npm ci	
	
brain-games: # выполнение файла brain-games.js	
	node bin/brain-games.js	
	
brain-even: # выполнение файла brain-even.js	
	node bin/brain-even.js	
	
brain-calc: # выполнение файла brain-calc.js	
	node bin/brain-calc.js	
	
brain-gcd: # выполнение файла brain-gcd.js	
	node bin/brain-gcd.js	

brain-progression: # выполнение файла brain-progression.js	
	node bin/brain-progression.js

brain-prime: # выполнение файла brain-prime.js	
	node bin/brain-prime.js
	
publish: # сбор архива для публикации в тестовом режиме
	npm publish --dry-run

lint: # запуск npx eslint	
	npx eslint .	

lintfix: # запуск npx eslint с флагом --fix
	npx eslint --fix .
