# 一括リネームするときのスクリプト
import os
import glob
from PIL import Image
from PIL.ExifTags import TAGS

with open('env.txt', 'r') as f:
  targetDate = f.read().strip().split('=')[1]

targetDir = '../src/pages/photo/' + targetDate + '/*'
files = glob.glob(targetDir)
targetFiles = [file for file in files if not file.endswith('.astro')]

print('targetFiles:' + str(len(targetFiles)))

sorted_files = sorted(targetFiles, key=lambda x: Image.open(x)._getexif()[36867])

for i, file in enumerate(sorted_files):
  simpleTargetDate = targetDate.replace('/', '')
  new_name = '_' + simpleTargetDate + '_' + str(i + 1) + '.jpg' 
  print(new_name)
  os.rename(file, os.path.dirname(file) + '/' + new_name)
