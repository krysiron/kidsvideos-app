# Script para crear iconos PWA básicos usando PowerShell
# KidsVideo - Crear iconos temporales

Write-Host "🎬 Creando iconos básicos para KidsVideo..." -ForegroundColor Green

# Crear iconos usando Add-Type para generar imágenes
Add-Type -AssemblyName System.Drawing

$sizes = @(72, 96, 128, 144, 152, 192, 384, 512)

foreach ($size in $sizes) {
    Write-Host "📁 Creando icon-${size}x${size}.png..." -ForegroundColor Yellow
    
    # Crear bitmap
    $bitmap = New-Object System.Drawing.Bitmap($size, $size)
    $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
    
    # Fondo azul gradiente
    $brush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(102, 126, 234))
    $graphics.FillRectangle($brush, 0, 0, $size, $size)
    
    # Texto "KV"
    $font = New-Object System.Drawing.Font("Arial", ($size * 0.3), [System.Drawing.FontStyle]::Bold)
    $textBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
    
    $text = "KV"
    $textSize = $graphics.MeasureString($text, $font)
    $x = ($size - $textSize.Width) / 2
    $y = ($size - $textSize.Height) / 2
    
    $graphics.DrawString($text, $font, $textBrush, $x, $y)
    
    # Guardar archivo
    $filename = "icon-${size}x${size}.png"
    $bitmap.Save($filename, [System.Drawing.Imaging.ImageFormat]::Png)
    
    # Limpiar recursos
    $graphics.Dispose()
    $bitmap.Dispose()
    $brush.Dispose()
    $textBrush.Dispose()
    $font.Dispose()
}

Write-Host "✅ ¡Todos los iconos creados exitosamente!" -ForegroundColor Green
Write-Host "📋 Archivos creados:" -ForegroundColor Cyan

Get-ChildItem *.png | Select-Object Name, Length | Format-Table