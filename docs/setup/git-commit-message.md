# Git Commit 消息中文编码修复指南

## 问题说明

在 Windows PowerShell 中直接使用 `git commit -m "中文消息"` 提交时，可能会出现中文乱码问题。这是因为 PowerShell 的编码设置和 Git 的编码处理之间的不匹配。

## 解决方案

### 方法一：使用文件方式提交（推荐）

这是最可靠的方法，可以确保中文消息正确提交：

```powershell
# 1. 创建 commit 消息文件（UTF-8 编码）
$commitMsg = @"
docs: 根据项目规范整理文档目录结构

- 创建 docs/ 目录并按类型分类组织项目文档
- 移动系统规范到 openspec/specs/ 目录
- 移动项目文档到 docs/ 目录
"@

$commitMsg | Out-File -FilePath commit-msg.txt -Encoding UTF8

# 2. 使用文件提交
git commit -F commit-msg.txt

# 3. 删除临时文件
Remove-Item commit-msg.txt
```

### 方法二：使用 Git 编辑器

配置 Git 使用支持 UTF-8 的编辑器：

```powershell
# 使用 VS Code 作为 Git 编辑器
git config --global core.editor "code --wait"

# 或使用记事本
git config --global core.editor "notepad"

# 提交时打开编辑器
git commit
```

### 方法三：单行消息（简单场景）

对于简单的单行消息，可以直接使用：

```powershell
git commit -m "fix: 修复组件渲染问题"
```

## Git 编码配置

确保 Git 已正确配置 UTF-8 编码：

```powershell
# 检查当前配置
git config --global i18n.commitencoding
git config --global i18n.logoutputencoding
git config --global core.quotepath

# 如果未配置，运行以下命令
git config --global i18n.commitencoding utf-8
git config --global i18n.logoutputencoding utf-8
git config --global core.quotepath false
```

## 验证提交消息

提交后验证消息是否正确：

```powershell
# 查看最近一次提交的消息
git log --oneline -1 --pretty=format:"%h %s"

# 查看完整的提交消息
git show HEAD --format="%B" --no-patch
```

## 修复已提交的乱码消息

如果已经提交了乱码消息，可以使用以下方法修复：

```powershell
# 1. 创建正确的消息文件
$correctMsg = @"
docs: 根据项目规范整理文档目录结构

- 创建 docs/ 目录并按类型分类组织项目文档
"@
$correctMsg | Out-File -FilePath commit-msg.txt -Encoding UTF8

# 2. 修改最近一次提交
git commit --amend -F commit-msg.txt

# 3. 删除临时文件
Remove-Item commit-msg.txt

# 4. 如果已推送到远程，需要强制推送（谨慎使用）
git push origin main --force
```

**注意**：强制推送会覆盖远程仓库的历史，如果其他人也在使用这个仓库，需要协调后再执行。

## 最佳实践

1. **使用文件方式提交多行中文消息**（推荐）
2. **确保文件使用 UTF-8 编码保存**
3. **提交前验证消息是否正确**
4. **避免在命令行中直接输入中文多行消息**

## 相关文档

- [Git 编码修复指南](./git-encoding-fix.md)
- [PowerShell 编码修复指南](./powershell-encoding-fix.md)
