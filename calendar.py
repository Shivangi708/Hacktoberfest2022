from calendar import *
year = input('Enter Year: ')
try:
    year = int(year)
    print(calendar(year, 2, 1, 8, 4))
except ValueError:
    print("PLEASE ENTER VALID YEAR.")
