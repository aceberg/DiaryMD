<h1><a href="https://github.com/aceberg/DiaryMD">
    <img src="https://raw.githubusercontent.com/aceberg/DiaryMD/main/assets/logo.png" width="20" />
</a>DiaryMD</h1>
<br/>

[![Main-Docker](https://github.com/aceberg/DiaryMD/actions/workflows/main-docker.yml/badge.svg)](https://github.com/aceberg/DiaryMD/actions/workflows/main-docker.yml)
[![Docker Image Size (latest semver)](https://img.shields.io/docker/image-size/aceberg/diarymd)](https://hub.docker.com/r/aceberg/diarymd)

Markdown diary with:
- Fully configurable Themes
- Tabs
- WorkSpaces
- Simple Blog
- Full screen mode
- Works with a given directory (could be `git` repo). No DB needed

![Screenshot](https://raw.githubusercontent.com/aceberg/DiaryMD/refs/heads/main/assets/Screenshot_05.png)

## More screenshots
<details>
  <summary>Expand</summary>

![Screenshot](https://raw.githubusercontent.com/aceberg/DiaryMD/refs/heads/main/assets/Screenshot_04.png)
![Screenshot](https://raw.githubusercontent.com/aceberg/DiaryMD/refs/heads/main/assets/Screenshot_03.png)
![Screenshot](https://raw.githubusercontent.com/aceberg/DiaryMD/refs/heads/main/assets/Screenshot_02.png)

</details>

## Quick start (Docker)
<details>
  <summary>Expand</summary>

```sh
docker run --name DiaryMD \
	-e "TZ=$YOURTIMEZONE" \
	-v ~/.dockerdata/DiaryMD:/data/DiaryMD \   # config
    -v ~/.dockerdata/DiaryRepo:/repo \         # diary
    -p 8854:8854 \
    aceberg/diarymd
```

</details> 

## Install Binary
<details>
  <summary>Expand</summary>


</details> 

## Auth
<details>
  <summary>Expand</summary>



</details> 