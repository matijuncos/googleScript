const uri = 'https://drive.google.com/open?id=1QDG2CYxymysXIvmlmp2OOyZZMm7m4eRFmZ3gBf9eFR4'

function doGet(e){
  return HtmlService.createTemplateFromFile('page').evaluate()
}

function getTableData(e){
    var ss = SpreadsheetApp.getActive()
    var ws = ss.getActiveSheet()
    var data = ws.getRange(1, 1, ws.getLastRow(), ws.getLastColumn()).getValues()
    return data
} 
