LogViz
======

Generic Log Visualization Tool

Installation 
------------

Mongo DB Notes
* https://docs.mongodb.com/manual/mongo/

__RHEL__ 
* https://www.softwarecollections.org/en/scls/rhscl/rh-mongodb34/

Installing the Database

    yum install rh-mongodb34 rh-mongodb34-mongodb-server

Starting the database

    scl enable rh-mongodb34 bash
    mongod --dbpath=/data/logviz --logpath=/data/logviz/logviz.log --bind_ip=0.0.0.0 -vv

