# npx @marp-team/marp-cli --server ./slides
# SumatraPDF $fout

function build_marp{
  param (
    $fin,
    $fout,
    $options = "", 
    $verbose = 1
  )
  $cmd= "marp $fin -o $fout --allow-local-files --theme ./themes/beamer.css $options"

  if ($verbose) {
    Write-Output $cmd  
  }
  Invoke-Expression $cmd
}

$ext = "html"
# $ext = "pdf"
$options = ""
# build_marp "./examples/high_level.md" "beamer_high" $options
# build_marp "./examples/low_level.md" "beamer_low" $options

build_marp "./examples/high_level.md" "pages/beamer_high.$ext" $options
build_marp "./examples/low_level.md" "pages/beamer_low.$ext" $options
