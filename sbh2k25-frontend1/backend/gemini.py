from google import genai
from google.genai import types

client = genai.Client(api_key="AIzaSyDZ7FcRos1l9R5K66MCXreueB_epGt67mM")

# Upload the first image
image1_path = "screenshots/amazon/amazon_full.png"
uploaded_file = client.files.upload(file=image1_path)

# Prepare the second image as inline data
image2_path = "screenshots/flipkart/flipkart_full.png"
uploaded_file2 = client.files.upload(file=image2_path)

# Create the prompt with text and multiple images
response = client.models.generate_content(
    model="gemini-2.0-flash",
    contents=[
        "on the basis of the images provided, which website do you think is better in terms of UI/UX and also give reasons ans well as recommendations to improve the UI and vision appealing based on category in terms of Ecommerce",
        uploaded_file,
        uploaded_file2
        
    ]
)

print(response.text)
