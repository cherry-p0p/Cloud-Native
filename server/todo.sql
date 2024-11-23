show databases;
use kdt;

CREATE TABLE todo{

}

CREATE TABLE todo (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    done tinyint(1) NOT NULL DEFAULT 0
);

INSERT INTO todo (title, done) VALUES ('sean todo1', 0);
INSERT INTO todo (title, done) VALUES ('sean todo2', 1);
INSERT INTO todo (title, done) VALUES ('sean todo3', 0);
INSERT INTO todo (title, done) VALUES ('sean todo4', 1);
INSERT INTO todo (title, done) VALUES ('sean todo5', 1);
INSERT INTO todo (title, done) VALUES ('sean todo6', 0);

-- 아래방식으로 insert도 가능 auto increment 에서는 null
INSERT INTO todo VALUES (null, 'my todo1', 0);

INSERT INTO todo (title, done) VALUES ('sean todo9', 0);
