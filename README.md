# Keycloak-Sami (Under Construction)

## 1. Description
Proof of concept for the Keycloak tool.

## 2. Install dependencies
```npm install```

## 3. Run demo
```docker-compose up --build```

## 4. Stop demo
```docker-compose down```

## 5. Clear volume data
```docker system prune --volumes```

## 6. Keycloak structure settings
```
Realms
- Hiring
- Pme
- Sami Data Platform

Realm Clients
- ${realm}-development-client
- ${realm}-staging-client
- ${realm}-production-client

Realm Users
- ${realm}-development
- ${realm}-staging
- ${realm}-production
```
## 7. Postman Collection
```./docs/keycloak.postman_collection```

## 8. Testing
### 8.1 Generating access tokens
	(POST) ${HOST}/auth/realms/${realm}/protocol/openid-connect/token