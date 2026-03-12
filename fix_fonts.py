import os

replacements = [
    ("'Barlow Condensed',sans-serif", "'Montserrat',sans-serif"),
    ("'Barlow Condensed', sans-serif", "'Montserrat',sans-serif"),
    ("'DM Mono',monospace", "'Inter',sans-serif"),
    ("'DM Mono', monospace", "'Inter',sans-serif"),
    ("'Outfit',sans-serif", "'Inter',sans-serif"),
    ("'Outfit', sans-serif", "'Inter',sans-serif"),
]

# Also remove @import url lines that load old fonts from components
old_import_patterns = [
    "@import url('https://fonts.googleapis.com/css2?family=DM+Mono",
    "@import url('https://fonts.googleapis.com/css2?family=Barlow",
]

files = [
    "src/components/About.jsx",
    "src/components/Contact.jsx",
    "src/components/Home.jsx",
    "src/components/BookingModal.jsx",
    "src/components/Footer.jsx",
    "src/components/Navbar.jsx",
    "src/components/LocationPage.jsx",
    "src/app/services/[slug]/ServiceContent.jsx",
]

for fpath in files:
    if not os.path.exists(fpath):
        print(f"SKIP (not found): {fpath}")
        continue
    with open(fpath, "r", encoding="utf-8") as f:
        lines = f.readlines()

    new_lines = []
    for line in lines:
        # Skip @import lines that load old font families from within JSX
        skip = False
        for pat in old_import_patterns:
            if pat in line:
                skip = True
                break
        if skip:
            new_lines.append("\n")  # keep blank line
            continue
        for old, new in replacements:
            line = line.replace(old, new)
        new_lines.append(line)

    with open(fpath, "w", encoding="utf-8") as f:
        f.writelines(new_lines)
    print(f"UPDATED: {fpath}")

print("All done.")
