connect postgres = psql -d postgres -h localhost -p 5432 -U docker
connect container = docker exec -it docker-node-posq_server_1 bash