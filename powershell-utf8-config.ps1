# PowerShell UTF-8 编码配置文件
# 自动设置 PowerShell 使用 UTF-8 编码，解决中文乱码问题

# 设置 PowerShell 输出编码
$OutputEncoding = [System.Text.Encoding]::UTF8
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
[Console]::InputEncoding = [System.Text.Encoding]::UTF8

# 设置控制台代码页为 UTF-8 (65001)
chcp 65001 | Out-Null

# 设置环境变量
$env:LANG = 'zh_CN.UTF-8'
$env:LC_ALL = 'zh_CN.UTF-8'
$env:PYTHONIOENCODING = 'utf-8'
