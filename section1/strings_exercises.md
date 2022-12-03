Exercises

#1. Store the value `Toyota` at the key `car`.

```
SET car Toyota
```

#2. 
Write a command that will store the value `triangle` at the key `shape` *only if* the key `shape` is not defined.

```
SET shape triangle NX
```

#3. Write a command that will store the value `'Todays Headlines'` at the key `news`, but automatically expire the key after three seconds.

```
SET news "Today's Headlines" PX 3000
```
