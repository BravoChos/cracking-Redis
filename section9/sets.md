# Sets

Sets store a collection of strings. Each string in a set is guaranteed to be unique. For example, you will never see the string `Hi there!` twice in a set.

The `SUNION`, `SINTER`, and `SDIFF` commands allow you to compare the differences between multiple sets.

- A union returns all of the unique elements across multiple sets
- An intersection returns all of the elements common to multiple sets
- A difference returns elements present in the _first_ set that are not present in any other

Sets are most useful for tracking the uniqueness of a value in an app. A few examples:

- A set can be used to make sure a username or email address is only used a single time in an app
- Sets can be used to set up a relationship between different records
- Set operations like `SINTER` can provide common attributes difference resources

## Examples

#1. SADD adds an element to a set stored at a key. If a set doesn't already exist at the key, it will be created for you.

```
SADD colors red
```

#2. `SMEMBERS` returns all the elements in a set. Be cautious with this command if you expect your set to contain many elements. If you are working with a large set, you might want to use `SSCAN` instead.

```
SMEMBERS colors
```

```
SADD colors:1 red blue orange
SADD colors:2 blue green purple
SADD colors:3 blue red purple
```

#3. `SUNION`returns all of the unique elements across multiple sets

```
SUNION colors:1 colors:2 colors:3
```

#4. `SINTER` returns all of the elements common to multiple sets

```
SINTER colors:1 colors:2 colors:3
```

#5. `SDIFF` returns elements present in the _first_ set that are not present in any other

```
SDIFF colors:1 colors:2 colors:3
```

#6. `SUNION`, `SINTER`, and `SDIFF` each have a 'store' variation that will store the result of the operation at a new key.

```
SINTERSTORE colors:results colors:1 colors:2 colors:3
```

#7. `ISMEMBER` returns 1 if a value is present in a set and 0 if it is not.

```
SISMEMBER colors:1 purple
```

#8. `SMISMEMBER` checks for the existence of multiple different elements in a set.

```
SMISMEMBER colors:1 red green blue
```

#9. `SCARD` returns the cardinality, or number of elements in a set.

```
SCARD colors:1

```

#10. `SREM` removes an element from a set.

```
SREM colors:2 blue

SISMEMBER colors:2 blue
```

#11. `SSCAN` iterates through all the elements of a set page by page. The `COUNT` option can be used to limit the number of elements returned per page.

```
SSCAN colors:1 0 COUNT 2

SSCAN colors:1 3 COUNT 2
```
