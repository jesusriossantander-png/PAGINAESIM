# ============================================================
#  Panel del sitio ESIM  -  Encender / Apagar el servidor local
# ============================================================
Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName System.Drawing

# ---- Configuracion ----
$Port     = 50300
$ServeDir = 'f:\pages\github'
$IP       = '192.168.0.250'
$Url      = "http://$IP`:$Port"

# Buscar python
$PythonExe = $null
$cmd = Get-Command python -ErrorAction SilentlyContinue
if ($cmd) { $PythonExe = $cmd.Source }
if (-not $PythonExe) {
    $cmd = Get-Command py -ErrorAction SilentlyContinue
    if ($cmd) { $PythonExe = $cmd.Source }
}

function Test-Running {
    $c = Get-NetTCPConnection -LocalPort $Port -State Listen -ErrorAction SilentlyContinue
    return [bool]$c
}

function Start-Server {
    if (Test-Running) { return }
    if (-not $PythonExe) {
        [System.Windows.Forms.MessageBox]::Show('No se encontro Python en esta PC.','ESIM') | Out-Null
        return
    }
    Start-Process -FilePath $PythonExe `
        -ArgumentList '-m','http.server',"$Port",'--bind','0.0.0.0' `
        -WorkingDirectory $ServeDir -WindowStyle Hidden
}

function Stop-Server {
    $conns = Get-NetTCPConnection -LocalPort $Port -State Listen -ErrorAction SilentlyContinue
    foreach ($conn in $conns) {
        try { Stop-Process -Id $conn.OwningProcess -Force -ErrorAction SilentlyContinue } catch {}
    }
}

# ---- Ventana ----
$form = New-Object System.Windows.Forms.Form
$form.Text = 'ESIM - Panel del sitio'
$form.Size = New-Object System.Drawing.Size(430, 320)
$form.StartPosition = 'CenterScreen'
$form.FormBorderStyle = 'FixedSingle'
$form.MaximizeBox = $false
$form.BackColor = [System.Drawing.Color]::FromArgb(20,24,28)

$title = New-Object System.Windows.Forms.Label
$title.Text = 'Sitio ESIM SRL'
$title.ForeColor = [System.Drawing.Color]::White
$title.Font = New-Object System.Drawing.Font('Segoe UI',15,[System.Drawing.FontStyle]::Bold)
$title.Location = New-Object System.Drawing.Point(24,18)
$title.AutoSize = $true
$form.Controls.Add($title)

$status = New-Object System.Windows.Forms.Label
$status.Location = New-Object System.Drawing.Point(24,58)
$status.Size = New-Object System.Drawing.Size(370,30)
$status.Font = New-Object System.Drawing.Font('Segoe UI',12,[System.Drawing.FontStyle]::Bold)
$form.Controls.Add($status)

$link = New-Object System.Windows.Forms.Label
$link.Text = $Url
$link.ForeColor = [System.Drawing.Color]::FromArgb(63,174,99)
$link.Font = New-Object System.Drawing.Font('Consolas',12)
$link.Location = New-Object System.Drawing.Point(24,96)
$link.AutoSize = $true
$form.Controls.Add($link)

$hint = New-Object System.Windows.Forms.Label
$hint.Text = 'Para mostrar desde otra PC de la oficina, abri ese link.'
$hint.ForeColor = [System.Drawing.Color]::FromArgb(150,162,170)
$hint.Font = New-Object System.Drawing.Font('Segoe UI',8.5)
$hint.Location = New-Object System.Drawing.Point(24,122)
$hint.AutoSize = $true
$form.Controls.Add($hint)

$btnOn = New-Object System.Windows.Forms.Button
$btnOn.Text = 'Encender'
$btnOn.Location = New-Object System.Drawing.Point(24,158)
$btnOn.Size = New-Object System.Drawing.Size(180,52)
$btnOn.FlatStyle = 'Flat'
$btnOn.Font = New-Object System.Drawing.Font('Segoe UI',12,[System.Drawing.FontStyle]::Bold)
$btnOn.ForeColor = [System.Drawing.Color]::White
$btnOn.BackColor = [System.Drawing.Color]::FromArgb(14,122,58)
$btnOn.Add_Click({ Start-Server; Start-Sleep -Milliseconds 400 }) | Out-Null
$form.Controls.Add($btnOn)

$btnOff = New-Object System.Windows.Forms.Button
$btnOff.Text = 'Apagar'
$btnOff.Location = New-Object System.Drawing.Point(216,158)
$btnOff.Size = New-Object System.Drawing.Size(180,52)
$btnOff.FlatStyle = 'Flat'
$btnOff.Font = New-Object System.Drawing.Font('Segoe UI',12,[System.Drawing.FontStyle]::Bold)
$btnOff.ForeColor = [System.Drawing.Color]::White
$btnOff.BackColor = [System.Drawing.Color]::FromArgb(70,78,86)
$btnOff.Add_Click({ Stop-Server; Start-Sleep -Milliseconds 400 }) | Out-Null
$form.Controls.Add($btnOff)

$btnOpen = New-Object System.Windows.Forms.Button
$btnOpen.Text = 'Abrir en el navegador'
$btnOpen.Location = New-Object System.Drawing.Point(24,224)
$btnOpen.Size = New-Object System.Drawing.Size(180,40)
$btnOpen.FlatStyle = 'Flat'
$btnOpen.Font = New-Object System.Drawing.Font('Segoe UI',10)
$btnOpen.ForeColor = [System.Drawing.Color]::White
$btnOpen.BackColor = [System.Drawing.Color]::FromArgb(40,46,52)
$btnOpen.Add_Click({ Start-Process $Url }) | Out-Null
$form.Controls.Add($btnOpen)

$btnCopy = New-Object System.Windows.Forms.Button
$btnCopy.Text = 'Copiar link'
$btnCopy.Location = New-Object System.Drawing.Point(216,224)
$btnCopy.Size = New-Object System.Drawing.Size(180,40)
$btnCopy.FlatStyle = 'Flat'
$btnCopy.Font = New-Object System.Drawing.Font('Segoe UI',10)
$btnCopy.ForeColor = [System.Drawing.Color]::White
$btnCopy.BackColor = [System.Drawing.Color]::FromArgb(40,46,52)
$btnCopy.Add_Click({ [System.Windows.Forms.Clipboard]::SetText($Url) }) | Out-Null
$form.Controls.Add($btnCopy)

# ---- Refresco de estado ----
$timer = New-Object System.Windows.Forms.Timer
$timer.Interval = 1500
$timer.Add_Tick({
    if (Test-Running) {
        $status.Text = '*  Encendido (visible en la red)'
        $status.ForeColor = [System.Drawing.Color]::FromArgb(63,174,99)
    } else {
        $status.Text = '*  Apagado'
        $status.ForeColor = [System.Drawing.Color]::FromArgb(220,90,90)
    }
})
$timer.Start()

[void]$form.ShowDialog()
$timer.Stop()
