# Git 中文编码问题 - 快速解决方案

## ✅ 已完成的配置

项目已配置 Git 和 PowerShell 使用 UTF-8 编码，解决中文 commit 信息乱码问题。

## 🔧 配置内容

### Git 配置
- `core.quotepath = false` - 不转义路径中的非 ASCII 字符
- `i18n.commitencoding = utf-8` - commit 信息使用 UTF-8
- `i18n.logoutputencoding = utf-8` - log 输出使用 UTF-8

### PowerShell 配置
已在 PowerShell 配置文件中添加 UTF-8 编码设置，每次打开 PowerShell 会自动应用。

## 📝 使用方法

### 重新打开 PowerShell（推荐）

配置已自动添加到 PowerShell 配置文件，**重新打开 PowerShell 窗口**即可生效。

### 或者手动加载配置

如果不想重新打开 PowerShell，运行：

```powershell
. $PROFILE
```

### 验证配置

运行以下命令验证：

```powershell
# 检查 Git 配置
git config --global --get i18n.commitencoding
# 应该输出: utf-8

# 测试中文输出
Write-Host "测试中文：你好世界"
```

## 🚀 现在可以正常使用

配置完成后，所有 Git commit 信息中的中文都会正常显示，不会再出现乱码。

### 示例

```powershell
git commit -m "feat: 添加新功能"
git commit -m "fix: 修复bug"
git commit -m "docs: 更新文档"
```

所有中文 commit 信息都会正确显示和提交。

## 📚 相关文件

- `.gitconfig-utf8` - Git UTF-8 编码配置文件
- `GIT_ENCODING_FIX.md` - 详细的问题说明和解决方案
- `setup-git-encoding.ps1` - 自动配置脚本（可选使用）

## ⚠️ 注意事项

1. **必须重新打开 PowerShell**：配置才会生效
2. **已提交的乱码 commit**：如果需要修复，可以使用 `git commit --amend`
3. **团队协作**：如果修改已推送的 commit，需要谨慎使用 `--force`

## 🔍 故障排查

如果仍然出现乱码：

1. 确认已重新打开 PowerShell
2. 检查 Git 配置：`git config --global --list | Select-String encoding`
3. 检查 PowerShell 配置：`Get-Content $PROFILE`
4. 手动设置当前会话：`chcp 65001`
