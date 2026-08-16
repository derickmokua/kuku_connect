from rembg import remove
from PIL import Image

input_path = r"c:\Users\ADMIN\connect\public\chicks_enhanced.png"
output_path = r"c:\Users\ADMIN\connect\public\chicks_enhanced_nobg.png"

input_image = Image.open(input_path)
output_image = remove(input_image)
output_image.save(output_path)
