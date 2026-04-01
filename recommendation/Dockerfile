FROM golang:1.20-alpine AS builder

WORKDIR /app

ENV CGO_ENABLED=0 GOOS=linux GOARCH=amd64

COPY go.mod go.sum ./
RUN go mod download

COPY . .

RUN go build -trimpath -ldflags="-s -w" -o main .

FROM alpine:3.22

WORKDIR /app

RUN apk add --no-cache tzdata

RUN adduser -D-g '' appuser

COPY --from=builder /app/main .

USER appuser

EXPOSE 8080

ENTRYPOINT [ "./main" ]