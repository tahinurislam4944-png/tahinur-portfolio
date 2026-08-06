-- ====================================
-- Tahinur Islam
-- Employee Database Management System
-- ====================================


CREATE DATABASE EmployeeManagement;


USE EmployeeManagement;



CREATE TABLE Employees(

Employee_ID INT PRIMARY KEY,

Name VARCHAR(100),

Department VARCHAR(50),

Position VARCHAR(50),

Salary INT,

Joining_Date DATE

);



INSERT INTO Employees VALUES

(1,'Rahim','IT','Developer',45000,'2025-01-10'),

(2,'Karim','HR','Manager',55000,'2024-05-15'),

(3,'Sadia','Finance','Analyst',50000,'2025-03-20');




-- View all employees

SELECT * FROM Employees;



-- Department wise employee

SELECT 
Department,
COUNT(*) AS Total_Employees

FROM Employees

GROUP BY Department;



-- Average Salary

SELECT 
AVG(Salary) AS Average_Salary

FROM Employees;
