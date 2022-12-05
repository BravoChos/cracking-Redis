## SQL Database Design Methodology

1. Put the data in tables
2. Figure out how we will query it

## Redis Design Methodology
1. Figure out hwat queres we need to answer
2. Strucutre adata to best answer those queries

## Considerations 
1. What type ot data are we storing?
2. should we be concerened about the size of data
3. Do we need to expire this data?
4. What will the key naming policy be for this data?
    - Keys should be unique
    - Other engineers should understand what a key is for
    - Tip - use functions to generate your key names so you have never make a typo
    - Exremely common practice is to use a ":" to separate different parts of the key
5. Any buysiness-logic concerns?
