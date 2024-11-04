# importとPhotoの原形を書いてくれるスクリプト
import os
import glob
import re

def atoi(text):
    return int(text) if text.isdigit() else text

def natural_keys(text):
    return [ atoi(c) for c in re.split(r'(\d+)', text) ]

with open('env.txt', 'r') as f:
  targetDate = f.read().strip().split('=')[1]

# ファイル一覧を取得
targetDir = '../src/pages/photo/' + targetDate + '/*'
files = glob.glob(targetDir)
targetFiles = [file for file in files if not file.endswith('.astro')]
sorted_files = sorted(targetFiles, key=natural_keys)

# import用
with open('imports.txt', 'w') as f: 
  for i, file in enumerate(sorted_files):
    name = os.path.basename(file)
    photoNumber = name.split('.')[0].split('_')[2]
    f.write('import Photo' + photoNumber + " from './" + name + "'\n")

# html用 インデントはprettierに任せる
with open('html.txt', 'w') as f: 
  for i, file in enumerate(sorted_files):
    name = os.path.basename(file)
    photoNumber = name.split('.')[0].split('_')[2]
    f.write('<Photo img={Photo' + photoNumber + '} alt="" text="' + str(i+1) + '" size={small}/>\n')
