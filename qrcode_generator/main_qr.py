""" 
Firstly, need to import a qrcode module on your system
-->on terminal: pip install qrcode 
"""
import qrcode
print("-- QR Code Generator --")
myUrl = input('Paste a URL over here or Text: ')
# generating qrcode
image = qrcode.make(myUrl)
# save the generated qrcode 
image.save('mycode.jpg')
print("QR Code Genrated..!!")