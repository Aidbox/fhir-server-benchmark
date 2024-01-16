# FHIR sever benchmark tool

FHIR server performance and load testing tool.

__Tests__
- [CRUD](./test/crud.js) - basic FHIR CRUD api testing on US CORE profile Patient  
- [Validation](./test/validation.js) - testing `$validate` operation for 6 different profiles
- [Search](./test/search.js) - perform different search operations


##  Install

### K6 - https://k6.io/docs/get-started/installation/

__MAC OS__
```bash
brew install k6
```

__Debian/ubuntu__
```bash
sudo gpg -k
sudo gpg --no-default-keyring --keyring /usr/share/keyrings/k6-archive-keyring.gpg --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C5AD17C747E3415A3642D57D77C6C491D6AC1D69
echo "deb [signed-by=/usr/share/keyrings/k6-archive-keyring.gpg] https://dl.k6.io/deb stable main" | sudo tee /etc/apt/sources.list.d/k6.list
sudo apt-get update
sudo apt-get install k6

```
  
### XK6 - https://github.com/grafana/xk6

Required only for [crud.js](./test/crud.js) tests.

__MAC OS__
```bash
brew install go
go install go.k6.io/xk6/cmd/xk6@latest
```

### Build with required xk6-kv plugin
https://github.com/oleiade/xk6-kv

```bash
cd bin
xk6 build --with github.com/oleiade/xk6-kv
```

## Run test

```bash
mkdir bin
cd bin
./k6 run ../test/crud.js \
     --tag runid=RUN_1 \
     --tag suite=CRUD \
     --env BASE_URL='https://fhir.server.org/fhir' \
     --env AUTH_USER='_user_' \
     --env AUTH_PASSWORD='_password_'
```