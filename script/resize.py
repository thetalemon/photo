# 一括リサイズするときのスクリプト
import glob
from PIL import Image

with open('env.txt', 'r') as f:
  targetDate = f.read().strip().split('=')[1]

targetDir = '../src/pages/photo/' + targetDate + '/*'
files = glob.glob(targetDir)
targetFiles = [file for file in files if not file.endswith('.astro')]

print('targetFiles:' + str(len(targetFiles)))

for i, file in enumerate(targetFiles):
  # 画像が両方 1600px 以上の場合は半分にリサイズする
  img = Image.open(file)
  width, height = img.size
  if width >= 1200 and height >= 1200:
    img.thumbnail((1200, 1200))
    img.save(file, exif=img.info['exif'])
    print('resized: ' + file)
  else:
    print('no need to resize: ' + file)