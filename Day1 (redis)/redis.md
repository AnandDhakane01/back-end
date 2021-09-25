* redis-cli

* {
    name: "anand",
    place: "pune"
}

* KEYS *
* TTL
* expire
* SETEX

## array
* lpush
* rpush
* lrange
* lpop
* rpop

## set
* SADD
* SMEMBERS


##
## for nesting objects
* HSET
* HGETALL
* HDEL
* HEXISTS


# Postgres
* sudo -u postgres psql
* CREATE USER username WITH PASSWORD 'password'
* CREATE DATABASE db
* GRAND ALL PRIVILAGES ON DATABASE db to username
* \l -> list all databases
* DROP DATABASE db -> delete database
* \c db -> connect to the database
* CREATE TABLE COMPANY(
    ID INT NOT NULL,
    NAME CHAR[50],
    AGE INT,
    ADDRESS TEXT,
);
* do not forget semicolon :) 






