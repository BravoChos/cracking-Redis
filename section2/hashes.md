# Hash

Hashes are used to store a nested collection of key-value pairs.

A hash is very similar to a Javascript object, a Python dict, a Java HashMap, or a Go Map.

Hashes are most frequently used to store or represent a single resource in an app. You might use a single hash, for example, to store a single post, a single image, or a single comment. Each key would be the name of an attribute, and each value would be the value of that attribute.

## Examples

#1. The `HSET` command is used to create or update a hash.

**Arguments**

1. The name of the key to create/update a hash at
2. The name of a key to set _in the hash_
3. The value of the key from #2
4. Repeat #2 and #3

```
HSET company name 'Fancy Concrete' age 1950
```

#2. `HGET` retrieves a single value from a hash.

```
HGET company name
```

#3. `HGETALL` retrieves all of the key-value pairs from a hash.

```
HGETALL company
```

#4. `HEXISTS` checks to see if a key has been defined in a hash.

```
HEXISTS company alskdjfalksjdf
```

#5. `DEL` deletes the entire hash stored at a key.

```
DEL company
```

#6. `HDEL` deletes a single key-value pair in a hash.

```
HDEL company age

HGETALL company
```
