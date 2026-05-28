import fitz
import shutil
import os

ROOT = r'C:/Users/PC/Desktop/www-coninmaq'
OUT_IMG = os.path.join(ROOT, 'public', 'machines')
OUT_PDF = os.path.join(ROOT, 'public', 'pdfs')

machines = [
  ('cdm6060n', r'C:/Users/PC/Downloads/EXCAVADORA LONKING -CDM6060N\uff08Weichai\uff09 coninmaqsas.pdf'),
  ('cdm6306',  r'C:/Users/PC/Downloads/EXCAVADORA 36 ton - CDM6306(Cummins Euro V & Tier 4F) coninmaq sas.pdf'),
  ('cdm6150f', r'C:/Users/PC/Downloads/EXCAVADORA LONKING -CDM6150F (Cummins Euro V & Tier 4F) coninmaqsas.pdf'),
  ('cdm6035',  r'C:/Users/PC/Downloads/EXCAVADORA LONKING -CDM6035 coninmaqsas-1.pdf'),
  ('cdm835h',  r'C:/Users/PC/Downloads/CARGADOR LONKING -CDM835H (Weichai EU\u2162) coninmaqsas.pdf'),
  ('cdm312',   r'C:/Users/PC/Downloads/MINICARGADOR LONKING CDM312 Kubota (Tier IV & EU Stage V+pilot) coninmaqsas.pdf'),
  ('cdm6225',  r'C:/Users/PC/Downloads/EXCAVADORA LONKING -CDM6225 (Cummins Euro V & Tier 4F) coninmaqsas.pdf'),
  ('cdm856h',  r'C:/Users/PC/Downloads/CARGADOR LONKING -CDM856H Weichai EU\u2162 coninmaqsas.pdf'),
  ('83d',      r'C:/Users/PC/Downloads/83D Backhoe Loader(Perkins Tier 4F &Euro V Carraro) coninmaqsas-1.pdf'),
]

ok = 0
fail = 0
for slug, pdf_path in machines:
    try:
        doc = fitz.open(pdf_path)
        page = doc[0]
        mat = fitz.Matrix(2.0, 2.0)
        pix = page.get_pixmap(matrix=mat)
        img_path = os.path.join(OUT_IMG, f'{slug}.png')
        pix.save(img_path)
        img_kb = os.path.getsize(img_path) // 1024
        doc.close()

        pdf_dest = os.path.join(OUT_PDF, f'{slug}.pdf')
        shutil.copy2(pdf_path, pdf_dest)
        pdf_kb = os.path.getsize(pdf_dest) // 1024

        print(f'OK  {slug}: img {img_kb}KB | pdf {pdf_kb}KB')
        ok += 1
    except Exception as e:
        print(f'ERR {slug}: {e}')
        fail += 1

print(f'\nDone: {ok} ok, {fail} failed')
