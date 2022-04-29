find ./ -type f -exec sed -i -e 's|Disciple_Tools_PII_Obfuscator|Disciple_Tools_PII_Obfuscator|g' {} \;
find ./ -type f -exec sed -i -e 's|disciple_tools_pii_obfuscator|disciple_tools_pii_obfuscator|g' {} \;
find ./ -type f -exec sed -i -e 's|disciple-tools-pii-obfuscator|disciple-tools-pii-obfuscator|g' {} \;
find ./ -type f -exec sed -i -e 's|pii_obfuscator|pii_obfuscator|g' {} \;
find ./ -type f -exec sed -i -e 's|PII Obfuscator|PII Obfuscator|g' {} \;
mv disciple-tools-pii-obfuscator.php disciple-tools-pii-obfuscator.php
rm .rename.sh
