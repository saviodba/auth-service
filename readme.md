microservices/
├── auth-service/
│   └── token

## Buildar imagem com usuario e tag

    docker build -t saviodev/auth-service:latest .

## Subir imagem para docker hub

    docker push saviodev/auth-service:latest

## Subir container em segundo plano

    docker-composer up -d
