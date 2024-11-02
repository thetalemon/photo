# importとPhotoの原形を書いてくれるスクリプト
import os
import glob
import re

def atoi(text):
    return int(text) if text.isdigit() else text

def natural_keys(text):
    return [ atoi(c) for c in re.split(r'(\d+)', text) ]

# ファイル一覧を取得
files = glob.glob('../src/pages/photo/2024/10/23/*.jpg')
sorted_files = sorted(files, key=natural_keys)

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
    f.write('<Photo img={Photo' + photoNumber + '} alt="" text="" size={small}/>\n')
