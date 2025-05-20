install: # установка зависимостей	
	npm ci	
	
brain-games: # выполнение файла brain-games.js	
	node bin/brain-games.js	
	
brain-even: # выполнение файла brain-even.js	
	node bin/brain-even.js	
	
brain-calc: # выполнение файла brain-calc.js	
	node bin/brain-calc.js	
	
publish: # сбор архива для публикации в тестовом режиме
	npm publish --dry-run

lint: # запуск npx eslint	
	npx eslint .
