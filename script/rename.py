# 一括リネームするときのスクリプト
import os
import glob

files = glob.glob('../src/pages/photo/2024/10/23/*')
targetFiles = [file for file in files if not file.endswith('.astro')]

for file in targetFiles:
  new_name = '_' + os.path.basename(file).replace('JPEG', 'jpg')
  os.rename(file, os.path.dirname(file) + '/' + new_name)
