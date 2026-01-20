# Git 中文编码配置脚本
# 运行此脚本以配置 Git 和 PowerShell 使用 UTF-8 编码

Write-Host "正在配置 Git 和 PowerShell UTF-8 编码..." -ForegroundColor Green

# 1. 配置 Git 全局编码设置
git config --global core.quotepath false
git config --global i18n.commitencoding utf-8
git config --global i18n.logoutputencoding utf-8
Write-Host "Git 编码配置已完成" -ForegroundColor Green

# 2. 设置当前会话编码
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
[Console]::InputEncoding = [System.Text.Encoding]::UTF8
chcp 65001 | Out-Null
Write-Host "当前会话编码已设置为 UTF-8" -ForegroundColor Green

# 3. 创建或更新 PowerShell 配置文件
$profilePath = $PROFILE
$profileDir = Split-Path -Parent $profilePath

if (-not (Test-Path $profileDir)) {
    New-Item -ItemType Directory -Path $profileDir -Force | Out-Null
    Write-Host "已创建 PowerShell 配置目录" -ForegroundColor Green
}

$configLines = @(
    "",
    "# Git UTF-8 编码配置",
    "# 自动设置 PowerShell 和 Git 使用 UTF-8 编码，解决中文乱码问题",
    "",
    "# 设置控制台编码为 UTF-8",
    "[Console]::OutputEncoding = [System.Text.Encoding]::UTF8",
    "[Console]::InputEncoding = [System.Text.Encoding]::UTF8",
    "chcp 65001 | Out-Null",
    "",
    "# 设置环境变量",
    "`$env:LANG = `"zh_CN.UTF-8`"",
    "`$env:LC_ALL = `"zh_CN.UTF-8`""
)

# 检查配置文件是否已存在相关配置
if (Test-Path $profilePath) {
    $existingContent = Get-Content $profilePath -Raw -ErrorAction SilentlyContinue
    if ($existingContent -notmatch "Git UTF-8 编码配置") {
        Add-Content -Path $profilePath -Value ($configLines -join "`n") -Encoding UTF8
        Write-Host "已更新 PowerShell 配置文件" -ForegroundColor Green
    } else {
        Write-Host "PowerShell 配置文件已包含编码设置" -ForegroundColor Yellow
    }
} else {
    Set-Content -Path $profilePath -Value ($configLines -join "`n") -Encoding UTF8
    Write-Host "已创建 PowerShell 配置文件" -ForegroundColor Green
}

Write-Host ""
Write-Host "配置完成！请重新打开 PowerShell 或运行以下命令使配置生效：" -ForegroundColor Cyan
Write-Host ". `$PROFILE" -ForegroundColor Yellow
Write-Host ""
Write-Host "或者直接重新打开 PowerShell 窗口。" -ForegroundColor Cyan
