import re
import sys


stringtoreplace = "<toc>"


def generateTOC(filename, out_filename, max_level=2):
    contents = []
    with open(filename, "r") as ins:
        for line in ins:
            searchObj = re.search(r'(#+)\ (.+)', line, re.M | re.I)
            if searchObj:
                temp = {}
                level = len(searchObj.group(1))
                if level > 1 and level <= max_level:
                    temp["level"] = level
                    temp["text"] = searchObj.group(2)
                    temp["link"] = "#" + \
                        searchObj.group(2).replace(" ", "-").lower()
                    # Remove special characters
                    temp["link"] = temp["link"].replace(".", "")
                    temp["link"] = temp["link"].replace(",", "")
                    temp["link"] = temp["link"].replace("?", "")
                    contents.append(temp)

    toctext = "## Table of Contents\n"
    for item in contents:
        line = (item['level'] - 2)*'\t' + \
            "1. ["+item['text']+"]("+item['link']+") \n"
        toctext = toctext + line

    filecontents = ""
    with open(filename, 'r') as myfile:
        filecontents = myfile.read()
    filecontents = filecontents.replace(stringtoreplace, toctext)

    with open(out_filename, "w") as file_update:
        file_update.write(filecontents)


if __name__ == "__main__":
    if len(sys.argv) >= 3:
        filename = sys.argv[1]
        out_filename = sys.argv[2]
        if len(sys.argv) >= 4:
            max_level = int(sys.argv[3])
        else:
            max_level = 2
        generateTOC(filename, out_filename, max_level=max_level)
    else:
        print("USAGE:", "$ python toc.py filename.md out_filename.md max_level")
