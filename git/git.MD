# 下载

- 执行 git clone xxxxx.git 下载项目

# 切换分支

- 执行  git branch –r  查看分支
- 选择对应分支，如果查询不到对应分支，使用git fetch获取远程更新
- 执行 git checkout addPromptForFirstLogin
- 切换分支完成后，使用 git branch 可以看到已经切换到对应分支

# 删除分支

- 如果分支已经不用可以删除执行  git branch -d xxx 删除本地分支
- git push --delete origin addPromptForFirstLogin删除远程的分支

# 创建分支
- git checkout -b addPromptForFirstLogin
- 或者 git branch addPromptForFirstLogin
       git checkout addPromptForFirstLogin

# 合并分支
> git cherry-pick xxxx

