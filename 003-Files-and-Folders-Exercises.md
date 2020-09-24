# Navigating & Creating Folders & Files

## Use these commands

### mkdir

```bash
# means MaKe DIRectory
mkdir ./NEW_FOLDER
mkdir -p ./PARENT_FOLDER/AND/CHILD_FOLDERS/
mkdir -p ./EXISTING_FOLDER/
```

### vim

```bash
# When you open vim, it'll go to the help screen
# When you press 'i' it will go into 'insert' mode
# You can type some text
# You can go back into command mode with <esc>
# You can 'w'rite and 'q'uit with :wq (and then hit enter)
vim SOME_FILE.md
```

### pushd & popd

```bash
# You can push into one or more folders
pushd ./Demo/home/
pushd ./app/.local/
# You can pop pack out to a previous level
popd
lsd -AF
```

## Create a directory structure that looks like this

```txt
Demo/
├── articles/
├── home/
│  └── app/
│     ├── .local/
│     │  ├── bin/
│     │  │  └── webi
│     │  └── opt/
│     └── Caddyfile
├── README.md
└── Users/
   └── me/
      ├── .local/
      │  ├── bin/
      │  │  └── webi
      │  └── opt/
      └── Pictures/
         └── 2020/
            ├── 01/
            ├── 02/
            ├── 03/
            ├── 04/
            ├── 05/
            ├── 06/
            ├── 07/
            ├── 08/
            ├── 09/
            ├── 10/
            ├── 11/
            └── 12/
```
