# =====================================
# Tahinur Islam - Data Analysis Project
# Employee Data Analysis using Python
# =====================================


import pandas as pd


# Load employee dataset

file = "employee_database.xlsx"


try:

    data = pd.read_excel(file)


    print("\nEmployee Data Preview:")
    print(data.head())


    print("\nDataset Information:")
    print(data.info())


    print("\nBasic Statistical Analysis:")
    print(data.describe())


    # Department wise employee count

    if "Department" in data.columns:

        department_count = data["Department"].value_counts()

        print("\nEmployees by Department:")
        print(department_count)



    # Salary Analysis

    if "Salary" in data.columns:

        average_salary = data["Salary"].mean()

        print("\nAverage Salary:")
        print(average_salary)



except FileNotFoundError:


    print("Dataset file not found. Please upload employee_database.xlsx")
