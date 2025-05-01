install: # установка зависимостей	
	npm ci	
	
brain-games: # выполнение файла brain-games.js	
	node bin/brain-games.js	
	
publish: # собрать архив в тестовом режиме
	npm publish --dry-run
