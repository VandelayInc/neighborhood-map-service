#!/bin/bash
  mongoimport --numInsertionWorkers 2 --db VandelayInc --collection neighborhoods --drop --type json --file ./json_csv/1million.json --jsonArray
for i in '2' '3' '4' '5' '6' '7' '8' '9' '10'
do
  mongoimport --numInsertionWorkers 2 --db VandelayInc --collection neighborhoods --type json --file ./json_csv/${i}million.json --jsonArray
done