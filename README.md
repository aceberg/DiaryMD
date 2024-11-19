<h1><a href="https://github.com/aceberg/DiaryMD">
    <img src="https://raw.githubusercontent.com/aceberg/DiaryMD/main/assets/logo.png" width="20" />
</a>DiaryMD</h1>
<br/>

[![Main-Docker](https://github.com/aceberg/DiaryMD/actions/workflows/main-docker.yml/badge.svg)](https://github.com/aceberg/DiaryMD/actions/workflows/main-docker.yml)
[![Docker Image Size (latest semver)](https://img.shields.io/docker/image-size/aceberg/diarymd)](https://hub.docker.com/r/aceberg/diarymd)

Markdown diary written in `Go` and `SolidJS`:
- Fully configurable Themes
- Tabs
- WorkSpaces
- Simple Blog
- Full screen mode
- Works with a given directory (could be a `git` repo). No DB needed

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
    -e "TZ=$YOURTIMEZONE" \  # your TZ here
    -e "REPOPATH=/repo" \    # path to diary dir
    -v ~/.dockerdata/DiaryMD:/data/DiaryMD \  # config
    -v ~/.dockerdata/DiaryRepo:/repo \        # diary
    -p 8854:8854 \
    -u $(id -u):$(id -g) \  # run as current user, so created files will be owned by user, not root
  aceberg/diarymd
```
Mounted volumes must have write permission for non-root user:
```
sudo chown $(id -u):$(id -g) ~/.dockerdata/DiaryMD
sudo chown $(id -u):$(id -g) ~/.dockerdata/DiaryRepo
```

</details> 

## Install Binary
<details>
  <summary>Expand</summary>

All binaries are available in the [latest](https://github.com/aceberg/DiaryMD/releases/latest) release.
</details> 

## Auth
<details>
  <summary>Expand</summary>

**DiaryMD** does not have built-in auth option. But you can use it with SSO tools like Authelia, or my simple auth app [ForAuth](https://github.com/aceberg/ForAuth).   
Here is an example [docker-compose-auth.yml](https://github.com/aceberg/DiaryMD/blob/main/docker-compose-auth.yml).

</details> 

## Config & WorkSpaces
<details>
  <summary>Expand</summary>

App config and config for `Default` workspace can be done through environment variables or `config.yaml` file. Also, `Default` workspace config and colors can be set through `GUI`.

Other workspaces have their own paths and themes, which can be configured through `GUI` (recommended) or `workspaces.yaml` file.

> :warning:  **Note**   
> While `Default` workspace stores open tabs in browser, other workspaces keep them in `workspaces.yaml` file, so, if you want to access the same tabs from different devices, do not use `Default`.

#### App config
| Variable  | Description | Default |
| --------  | ----------- | ------- |
| TZ | Set your timezone for correct time | |
| HOST | Listen address | 0.0.0.0 |
| PORT   | Port for web GUI | 8854 |

#### Default workspace config
| Variable  | Description | Default |
| --------  | ----------- | ------- |
| REPOPATH | Path to diary dir or repo |  |
| BLOGPATH | Path to dir with `blog.json` file |  |
| PAGE_STEP | Items per page in blog | 3 |
| THEME | `dark`, `gray`, `lake`, `night`, `sand` or `CUSTOM` | sand |

If `THEME`=`CUSTOM`, colors can be set individually.

#### Colors

| Variable  | Description | Default |
| --------  | ----------- | ------- |
| C_FONT | Font color | #313136 |
| C_MENU | Menu color | #dfb377 |
| C_EDIT | Editor back color | #faeddc |
| C_BACK | Background color | #f8e6cc |
| C_OUTLINE | Outline color | #616161 |

</details>

## Options
<details>
  <summary>Expand</summary>

| Key  | Description | Default | 
| --------  | ----------- | ------- | 
| -d | Path to config dir | /data/DiaryMD | 

</details> 


## Blog
<details>
  <summary>Expand</summary>

Blog option is still under development and a bit experimental.   
To enable blog in the workspace, set `BLOGPATH` to directory, where `blog.json` file is stored.

Example of `blog.json` file. Here `path` is relative path inside the dir, specified in `BLOGPATH`. File `blog.json` must be at the root of the dir.

```json
[{
  "date": "2024-11-03",
  "name": "Auth for WatchYourLAN and other apps",
  "path": "/IT/ForAuth.md",
  "tags": ["my-apps"]
},
{
  "date": "2024-10-06",
  "name": "WatchYourPorts",
  "path": "/IT/WYP.md",
  "tags": ["my-apps"]
},
{
  "date": "2024-10-02",
  "name": "Replace HDD in RAID1",
  "path": "/IT/Raid-replace.md",
  "tags": ["linux", "hardware"]
}] 
```
</details> 


## Thanks
<details>
  <summary>Expand</summary>

- [EasyMDE](https://github.com/Ionaru/easy-markdown-editor) editor
- All go packages listed in [dependencies](https://github.com/aceberg/DiaryMD/network/dependencies)
- Favicon and logo: [Flaticon](https://www.flaticon.com)
- [Bootstrap](https://getbootstrap.com/)

</details> 