# $fin = "./slides/demo/index.md"
# $fin = "./CUG-HydroMet/ch02_geop_fields.md"
$fin = "./CUG-HydroMet/ch00_绪论.md"
$fout = "a.pdf"


# npx @marp-team/marp-cli --server ./slides
marp $fin -o $fout --allow-local-files
SumatraPDF $fout
