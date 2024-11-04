# 一括リネームするときのスクリプト
import os
import glob
from PIL import Image
import re

with open('env.txt', 'r') as f:
  targetDate = f.read().strip().split('=')[1]

targetDir = '../src/pages/photo/' + targetDate + '/*'
files = glob.glob(targetDir)
imageFiles = [file for file in files if not file.endswith('.astro')]
# 既に_YYYYMMDD_NN.jpgのものはrenameしない
targetFiles = [file for file in imageFiles if not re.match(r'_\d{8}_\d{1,3}.jpg', os.path.basename(file))]

print('targetFiles:' + str(len(targetFiles)))

sorted_files = sorted(targetFiles, key=lambda x: Image.open(x)._getexif()[36867])

for i, file in enumerate(sorted_files):
  simpleTargetDate = targetDate.replace('/', '')
  new_name = '_' + simpleTargetDate + '_' + str(i + 1) + '.jpg' 
  print(new_name)
  os.rename(file, os.path.dirname(file) + '/' + new_name)
