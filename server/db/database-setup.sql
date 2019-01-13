DROP DATABASE IF EXISTS htt_pma_db;

DROP USER IF EXISTS htt_pma_db_user;

CREATE USER htt_pma_db_user WITH ENCRYPTED PASSWORD 'password';

CREATE DATABASE htt_pma_db WITH OWNER 'gro_bro_user';