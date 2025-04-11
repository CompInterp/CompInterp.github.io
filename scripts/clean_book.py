import os
from bs4 import BeautifulSoup, Comment

# Directory containing the HTML files
directory = "/home/ward/Documents/CompInterp.github.io/assets/book/"


def remove_comments_from_html(file_path):
    with open(file_path, "r", encoding="utf-8") as file:
        soup = BeautifulSoup(file, "html.parser")

    # Remove all comments
    for comment in soup.find_all(string=lambda text: isinstance(text, Comment)):
        comment.extract()

    # Write the cleaned HTML back to the file
    with open(file_path, "w", encoding="utf-8") as file:
        file.write(str(soup))


# Walk through the directory and process all .html files
for root, _, files in os.walk(directory):
    for file in files:
        if file.endswith(".html"):
            file_path = os.path.join(root, file)
            print(f"Processing: {file_path}")
            remove_comments_from_html(file_path)

print("All comments removed from HTML files.")
