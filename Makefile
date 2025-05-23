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
	
publish: # сбор архива для публикации в тестовом режиме
	npm publish --dry-run

lint: # запуск npx eslint	
	npx eslint .	

lintfix: # запуск npx eslint с флагом --fix
	npx eslint --fix .
