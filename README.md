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

## 9. Notas

- Para funcionar a API REST, adicionar ```http://localhost:8081``` ao Frontend URL no Realm
<!-- 
# 10. Passo a passo
## Master
### Realm (Settings)
- Frontend URL: ```http://localhost:8080/auth```
- User-Managed Access: ```ON```

### Admin-cli (Settings)
- Access Type: ```confidential```
- Direct Access Grants Enabled: ```ON```
- Service Accounts Enabled : ```ON```
- Standard Flow Enabled : ```OFF```

## Hexadefence
### Realm (Settings)
- User-Managed Access: ```OFF```
### User (Details)
- Username: ```hexa```
- Email Verified: ```ON```
### User (Role Mappings)
- ```offline_access```
- ```uma_authorization```

 -->



# Configuração do Keycloak
- Criar realm ```${app}```
- Setar ```User-Managed Access = ON```
--- 
- Criar o client ```${app}_client```
- Setar ```Standard Flow Enabled = OFF```
- Setar ```Authorization Enabled = ON```
- Criar o client role ```${app}_client_role```
---
- Criar o grupo ```${app}_users```
- Adicionar o client role ```${app}_client_role```
--- 
- Mudar para realm ```Master```
- Adicionar credenciais para o grupo ```admin-cli```
- Para funcionar a API REST, adicionar ```http://${host}:${porta}/``` ao Frontend URL em ```Realm Settings```
- Cria user ```${app}_admin```
- setar credenciais
- O client ```${app}_realm``` é criado automaticamente
- Setar o client role ```${app}-realm``` -> ```manage-users```

