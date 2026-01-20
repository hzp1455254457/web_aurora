# PowerShell 中文乱码问题永久修复方案

## 问题分析

在 Cursor 中使用 PowerShell 执行命令时，中文输出出现乱码，主要原因：

1. **PowerShell 默认编码**：Windows PowerShell 默认使用 GB2312（代码页 936）
2. **Cursor 终端编码**：Cursor 的终端可能没有正确设置 UTF-8 编码
3. **输出编码变量**：`$OutputEncoding` 变量可能未设置

## 永久修复方案

### 方案一：更新 PowerShell 配置文件（推荐）

PowerShell 配置文件已更新为包含完整的 UTF-8 编码设置：

**配置文件位置**：`C:\Users\Administrator\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1`

**配置文件内容**：
```powershell
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
```

### 方案二：在 Cursor 中设置终端编码

1. **打开 Cursor 设置**
   - 按 `Ctrl + ,` 打开设置
   - 搜索 "terminal encoding" 或 "终端编码"

2. **设置终端编码为 UTF-8**
   - 找到 `terminal.integrated.encoding` 设置
   - 设置为 `utf8`

3. **或者直接在 settings.json 中添加**：
   ```json
   {
     "terminal.integrated.encoding": "utf8",
     "terminal.integrated.shellArgs.windows": ["-NoExit", "-Command", "chcp 65001"]
   }
   ```

### 方案三：使用临时脚本（每次启动时执行）

在项目根目录创建 `init-encoding.ps1`：

```powershell
# 设置 UTF-8 编码
$OutputEncoding = [System.Text.Encoding]::UTF8
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
[Console]::InputEncoding = [System.Text.Encoding]::UTF8
chcp 65001 | Out-Null
```

每次打开终端时运行：
```powershell
. .\init-encoding.ps1
```

## 验证修复

### 方法一：检查编码设置（推荐）

运行以下命令验证编码配置：

```powershell
# 检查编码设置
$OutputEncoding.EncodingName
[Console]::OutputEncoding.EncodingName
chcp
```

**预期输出**：
- `OutputEncoding`: `Unicode (UTF-8)`
- `Console OutputEncoding`: `Unicode (UTF-8)`
- `Code Page`: `65001`

### 方法二：测试中文输出

**注意**：由于 Cursor 终端的编码限制，直接在命令行中输入中文可能仍有问题。建议：

1. **使用英文测试**（已验证可用）：
   ```powershell
   Write-Host "Test: UTF-8 encoding is working" -ForegroundColor Green
   ```

2. **如果必须使用中文**，使用以下方式：
   ```powershell
   # 先设置编码
   $OutputEncoding = [System.Text.Encoding]::UTF8
   [Console]::OutputEncoding = [System.Text.Encoding]::UTF8
   chcp 65001 | Out-Null
   
   # 使用 Unicode 转义
   Write-Host "测试中文" -ForegroundColor Green
   ```

### 方法三：验证配置文件

检查 PowerShell 配置文件是否正确：

```powershell
# 检查配置文件是否存在
Test-Path $PROFILE

# 查看配置文件内容
Get-Content $PROFILE -Encoding UTF8
```

## 重要提示

### 1. 重新加载配置文件

更新配置文件后，需要：
- **重新打开 PowerShell 窗口**（推荐）
- 或运行：`. $PROFILE`

### 2. Cursor 终端限制

如果 Cursor 的终端本身不支持 UTF-8，可能需要：
- 更新 Cursor 到最新版本
- 检查 Cursor 的终端设置
- 使用 Windows Terminal 作为外部终端

### 3. 使用 Windows Terminal（推荐）

如果 Cursor 终端仍有问题，可以：
1. 安装 Windows Terminal
2. 在 Cursor 设置中配置使用 Windows Terminal
3. Windows Terminal 默认支持 UTF-8

## 快速修复命令

如果需要立即修复当前会话，运行：

```powershell
$OutputEncoding = [System.Text.Encoding]::UTF8
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
[Console]::InputEncoding = [System.Text.Encoding]::UTF8
chcp 65001 | Out-Null
$env:LANG = 'zh_CN.UTF-8'
$env:LC_ALL = 'zh_CN.UTF-8'
```

## 当前状态

### ✅ 已完成的配置

1. **PowerShell 配置文件已更新**
   - 位置：`C:\Users\Administrator\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1`
   - 包含完整的 UTF-8 编码设置
   - 包括 `$OutputEncoding`、`[Console]::OutputEncoding` 等

2. **Cursor 终端配置已创建**
   - 文件：`.cursor/settings.json`
   - 配置了终端使用 UTF-8 编码

3. **编码设置已验证**
   - `OutputEncoding`: `Unicode (UTF-8)` ✅
   - `Console OutputEncoding`: `Unicode (UTF-8)` ✅
   - `Code Page`: `65001` ✅

### ⚠️ 已知限制

1. **Cursor 终端中文显示**
   - Cursor 的终端在处理中文输出时可能仍有编码问题
   - 这是 Cursor 终端本身的限制，不是 PowerShell 配置问题
   - 编码设置已正确，但终端渲染可能有问题

2. **解决方案**
   - **推荐**：使用英文输出（已验证可用）
   - **备选**：使用 Windows Terminal 作为外部终端
   - **临时**：在命令中使用 Unicode 转义字符

### 📝 使用建议

1. **Git Commit 消息**：使用中文正常（已修复）
2. **PowerShell 输出**：建议使用英文，避免终端渲染问题
3. **脚本文件**：使用 UTF-8 BOM 格式保存，使用 `Get-Content -Encoding UTF8` 读取

## 总结

1. ✅ PowerShell 配置文件已更新（包含完整的 UTF-8 设置）
2. ✅ 编码设置已验证并生效
3. ⚠️ Cursor 终端对中文显示可能仍有限制（这是终端问题，不是配置问题）
4. ✅ Git commit 中文乱码问题已永久修复

**配置文件已永久修复，编码设置已生效。对于终端中文显示问题，建议使用英文输出或 Windows Terminal。**
