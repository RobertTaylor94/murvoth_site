FROM golang:1.22.1-alpine AS builder

# RUN apk add --no-cache build-base
# RUN apk add --no-cache gcc g++ musl-dev

WORKDIR /app

COPY . .

RUN go build -o murv main.go

FROM alpine:latest

RUN addgroup -S murvgroup && adduser -S murvuser -G murvgroup

WORKDIR /

COPY --from=builder /app/murv /murv

COPY --from=builder /app/templates /templates

RUN chown murvuser:murvgroup /murv

USER murvuser

EXPOSE 5050

CMD ["/murv"]