

# 特定のフォルダからファイル一覧を取得して命名変更する
import os
import glob

# ファイル一覧を取得
files = glob.glob('../src/pages/photo/2024/10/22/*.jpg')

# # ファイル一覧を表示
# for file in files:
#     # print(file)
    
# ファイル名を変更して書き出す
for file in files:
  new_name = '_' + os.path.basename(file)
  print(new_name)
  # 出力先は元のディレクトリ
  os.rename(file, os.path.dirname(file) + '/' + new_name)
  # os.rename(file, new_name)
  
