## Basic Commends

```
SET message 'Hi there'
```

Command `SET message` returns "OK"

```
GET message
```

Command `GET message` returns "Hi there"


## Commends by Types

- String
    - Store plain string or number    
    - commend ex) SET, GET, APPEND
- List
    - List of strings
    - commend ex) LINDEX, LLEN, LINSERT
- HASH
    - collection of key-value pairs
    - commend ex) HGET, HSET, HDEL
- Set
    - Set of strings(each string is unique)
    - commend ex) SADD, SCARD, SDIFF
- Sorted Set
    - Set of strings in a particular order
    - commend ex) ZADD, ZDIFF, ZCOUNT
- Bitmap
    - Kind of like a collection of booleans
    - commend ex) BITOP, BITCOUNT, BITPOS
- Hyperloglog
    - Kind of like a collection of booleans
    - commend ex) PFADD, PFCOUNT, PFMERGE
- JSON
    - Nested JSON structure
    - commend ex) JSON.SET, JSON.GET, JSON.DEL
- HASH
    - collection of key-value pairs
    - commend ex) HGET, HSET, HDEL
- Index
    - Internal data used for searcing
    - commend ex) FT.SEARCH, FT.CREATE, FT.PROFILE

=> no need to memorize!

more commends refer https://redis.io/commands/

Commands are used to store and retrieve information