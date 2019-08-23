---
slug: '/create-quick-backup'
date: '2019-08-09'
updatedDate: '2019-08-23'
title: 'Create quick backup of current file in VIM'
description: 'Pressing Esc key is tiring as the finger has to move to the corner...'
categories: ['vim']
tags: ['vim', 'keymaps']
keywords: ['vim', 'keymap']
banner: './images/banner.png'
---

---

### COMMAND

```vim
:w %.bak
```

### EXPLANATION

- `:w` : Write file to disk
- `%` : Get current file name
- `.bak` : Arbitrary extension name for the file

**_Sometimes_** we have a create a copy of current working file, just for trying out some new thing or feature.

Offcourse, version control systems was made for this solving this problem.

But, lets say you don't want to use version control, so the other option is to duplicate the file, rename it either by changing the filename or the extension.

This task will take some time, but in vim, you can use the command `:w %.bak` to create version of the current file with `yourfilename.extension.bak` in the same directory.

---
