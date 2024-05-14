DEV_CSS_CMD = docker exec -it -d -u node indimed.lt npm run dev:css

start:
	docker compose up -d;
	$(DEV_CSS_CMD);

stop:
	docker compose stop;

restart:
	docker compose restart;
	$(DEV_CSS_CMD);
