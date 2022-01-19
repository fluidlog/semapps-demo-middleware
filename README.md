# Deploy multi-instance semapps-demo-middleware to production
Template to deploy demo SemApps Archipelago multi-instance Server

This guide will help you deploy demo SemApps Archipelago multi-instance Server to a production environment.

It includes:
- [Traefik](https://traefik.io) to orchestrate domain names and certificates
- [Apache Jena Fuseki](https://jena.apache.org/documentation/fuseki2/) triplestore to store semantic data (on port 3030)
- [Redis](https://redis.io) to cache data and improve performances

## Configuration

In your DNS registrar, you will need to point two domains to your server:

- `data.mydomain.com` with the domain name where your data will be stored
- `mydomain.com` with the domain name where the frontend will be available

In `docker-compose-prod.yml`:

- Replace `data.mydomain.com` with the domain name where your data will be stored
- Replace `mydomain.com` with the domain name where the frontend will be available
- Replace `myemail@mydomain.com` by your email address (this is for Let's encrypt certificates)
- Replace `mypassword` with the password you want for the Fuseki admin

Add `middleware/app/.env.local` from `middleware/app/.env`:

- Replace `data.mydomain.com` with the domain name where your data will be stored
- Replace `mypassword` by the previously set Fuseki password
- Add the configuration required to connect to your OIDC server

In `frontend/app/.env.local`:

- Replace `data.mydomain.com` with the domain name where your data will be stored

> Any file added to the `middleware/app` and `frontend/app` directories will be copied to the Docker containers, eventually overwriting existing files.

## Launch

```bash
docker-compose build
docker-compose up -d
```

Or using makefile

```bash
make build-prod
make start-prod
make log-prod
make stop-prod
```
