#!/bin/bash


MONGO_DIR=~/mongoDB
MONGO_TGZ_URL=https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-ubuntu1604-3.6.2.tgz

mkdir $MONGO_DIR
wget -P $MONGO_DIR $MONGO_TGZ_URL

tar xvf $MONGO_DIR/*gz -C $MONGO_DIR

mv $MONGO_DIR/mongodb-linux-x86_64-ubuntu1604-3.6.2/ $MONGO_DIR/app/

mkdir $MONGO_DIR/data

echo "alias mongod=\"$MONGO_DIR/app/bin/mongod --dbpath $MONGO_DIR/data'\"" >> ~/.bashrc
echo "alias mongo=\"$MONGO_DIR/app/bin/mongo\"" >> ~/.bashrc
source ~/.bashrc
