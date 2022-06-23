CREATE TABLE Book
(
    bookid int NOT NULL PRIMARY KEY,
    bookname varchar(15) NOT NULL,
    price int NOT NULL
);

INSERT INTO Book(bookid,bookname,price) values(1,'Maths',300);
INSERT INTO Book(bookid,bookname,price) values(2,'Physics',400);
INSERT INTO Book(bookid,bookname,price) values(3,'Chemistry',500);