param([switch]$Clean=$false,
      [switch]$Setup=$false )

if( $Clean -eq $true )
{
    Write-Host 'Cleaning Binaries'

    if( $(Test-Path .\node_modules)) { Remove-Item -Recurse -Force .\node_modules; }
    if( $(Test-Path .\dist\*.bundle.js)) { Remove-Item -Recurse -Force dist\*.bundle.js; }
}

if( $Setup -eq $true )
{
    Write-Host 'Setting up Project'

    #  Install the NPM Modules
    npm install 

    # Setup Webpack Bundle
    npx webpack
}
