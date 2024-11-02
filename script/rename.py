# 一括リネームするときのスクリプト
import os
import glob

files = glob.glob('../src/pages/photo/2024/10/22/*.jpg')
    
for file in files:
  new_name = '_' + os.path.basename(file)
  os.rename(file, os.path.dirname(file) + '/' + new_name)
