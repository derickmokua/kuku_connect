from rembg import remove
from PIL import Image

input_path = r"c:\Users\ADMIN\connect\public\Gemini_Generated_Image_2ctedk2ctedk2cte.png"
output_path = r"c:\Users\ADMIN\connect\public\Gemini_Generated_Image_2ctedk2ctedk2cte_nobg_ai.png"

input_image = Image.open(input_path)
output_image = remove(input_image)
output_image.save(output_path)
