# Git 中文乱码问题解决方案

## 问题原因

在 Windows PowerShell 中，默认编码是 GB2312（代码页 936），而 Git 使用 UTF-8 编码。当在 PowerShell 中输入中文 commit 信息时，Git 接收到的可能是 GB2312 编码的字节，但 Git 认为这是 UTF-8，导致乱码。

## 解决方案

### 方法一：运行配置脚本（推荐）

运行项目根目录下的 `setup-git-encoding.ps1` 脚本：

```powershell
powershell -ExecutionPolicy Bypass -File .\setup-git-encoding.ps1
```

这个脚本会：
1. 配置 Git 使用 UTF-8 编码
2. 设置 PowerShell 配置文件，自动应用 UTF-8 编码
3. 配置完成后，重新打开 PowerShell 即可生效

### 方法二：手动配置

#### 1. 配置 Git 编码

```powershell
git config --global core.quotepath false
git config --global i18n.commitencoding utf-8
git config --global i18n.logoutputencoding utf-8
```

#### 2. 设置 PowerShell 配置文件

编辑 PowerShell 配置文件（`$PROFILE`），添加以下内容：

```powershell
# Git UTF-8 编码配置
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
[Console]::InputEncoding = [System.Text.Encoding]::UTF8
chcp 65001 | Out-Null

$env:LANG = "zh_CN.UTF-8"
$env:LC_ALL = "zh_CN.UTF-8"
```

如果配置文件不存在，创建它：

```powershell
# 创建配置目录
New-Item -ItemType Directory -Path (Split-Path -Parent $PROFILE) -Force

# 创建配置文件
Set-Content -Path $PROFILE -Value "# Git UTF-8 编码配置`n[Console]::OutputEncoding = [System.Text.Encoding]::UTF8`n[Console]::InputEncoding = [System.Text.Encoding]::UTF8`nchcp 65001 | Out-Null" -Encoding UTF8
```

#### 3. 应用配置

重新打开 PowerShell 或运行：

```powershell
. $PROFILE
```

### 方法三：临时设置（仅当前会话）

如果不想修改配置文件，可以在每次使用 Git 前运行：

```powershell
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
[Console]::InputEncoding = [System.Text.Encoding]::UTF8
chcp 65001
```

## 验证配置

运行以下命令验证配置：

```powershell
# 检查 Git 配置
git config --global --get i18n.commitencoding
git config --global --get i18n.logoutputencoding
git config --global --get core.quotepath

# 测试中文输出
Write-Host "测试中文：你好世界"
```

## 修复已提交的乱码 commit

如果需要修复已经提交的乱码 commit 信息，可以使用：

```powershell
# 修改最近一次 commit 信息
git commit --amend -m "正确的 commit 信息"

# 强制推送（谨慎使用）
git push --force origin main
```

**注意**：如果 commit 已经推送到远程仓库，修改后需要强制推送，这会影响其他协作者。建议只在必要时使用。

## 推荐方案

**推荐使用方法一（运行配置脚本）**，这样可以：
- 一次性配置所有必要的设置
- 自动创建 PowerShell 配置文件
- 永久解决编码问题，无需每次手动设置

配置完成后，重新打开 PowerShell，之后所有的 Git commit 信息中的中文都会正常显示。
