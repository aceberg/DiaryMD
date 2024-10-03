FROM golang:alpine AS builder

RUN apk add build-base
COPY backend /src
RUN cd /src/cmd/DiaryMD/ && CGO_ENABLED=0 go build -o /DiaryMD .


FROM scratch

WORKDIR /app
COPY --from=builder /DiaryMD /app/

ENTRYPOINT ["./DiaryMD"]