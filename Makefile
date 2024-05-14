start:
	docker compose up -d;
	docker exec -it -d -u node indimed.lt npm run dev:css

stop:
	docker stop indimed.lt;
