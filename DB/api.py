import gspread
from oauth2client.service_account import ServiceAccountCredentials
from pprint import pprint

scope = ["https://spreadsheets.google.com/feeds","https://www.googleapis.com/auth/drive"]
#
creds = ServiceAccountCredentials.from_json_keyfile_name("DB/keys.json", scope)

client = gspread.authorize(creds)

sheet = client.open("Book").sheet1 # Open the spreadhseet

def add_sheets(row):
    sheet.update("A" + str(len(sheet.col_values(1))+1), [row])
    return True;
# data = sheet.get_all_records()
# print(data)
