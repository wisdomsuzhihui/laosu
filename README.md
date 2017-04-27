# laosu
项目结构:

├── app.js                                  项目入口文件
├── app                                     Node后端MVC文件目录
│   ├── controllers                         控制器目录
│   │   ├── movie                           电影页面控制器目录
│   │   ├── music                           音乐页面控制器目录
│   │   └── user                            用户列表控制器目录
│   ├── models                              模型目录
│   │   ├── movie
│   │   ├── music
│   │   └── user
│   ├── schemas                             模式目录
│   │   ├── movie
│   │   ├── music
│   │   └── user
│   └── views                               视图文件目录
│       ├── includes
│       └── pages
├── doubanDatabase                          供参考的数据库数据
│   └── douban
├── node_modules                            node模块目录
├── public                                  静态文件目录
│   ├── images                              图片目录
│   │   ├── includes                        公共图片目录
│   │   ├── movie
│   │   ├── music
│   │   └── user
│   ├── libs                                经过gulp处理后文件所在目录
│   │   ├── css
│   │   ├── images
│   │   └── scripts
│   ├── sass                                样式目录
│   │   ├── include
│   │   ├── movie
│   │   └── music
│   ├── scripts                             JS脚本目录
│   │   ├──js
│   │   └── components Vue组件目录
│   │       ├── movie
│   │       │   ├── ChooseMovieItem.vue     选电影/电视剧区域子组件
│   │       │   ├── ChooseMovies.vue        选电影/电视剧区域父组件
│   │       │   ├── ChooseMoviesTitle.vue   选电影/电视剧区域标题组件
│   │       │   └── movie_index.js          电影首页脚本
│   │       └── music
│   │           ├── ArtistSongItem.vue      本周单曲榜区域子组件
│   │           ├── ArtistSongs.vue         本周单曲榜区域父组件
│   │           ├── HotProMusicItem.vue     近期热门歌单音乐组件
│   │           ├── HotProgrammeItem.vue    近期热门歌单子组件
│   │           ├── HotProgrammes.vue       近期热门歌单父组件
│   │           ├── NewAlbumItem.vue        新碟榜子组件
│   │           ├── NewAlbums.vue           新碟榜父组件
│   │           ├── Title.vue               标题组件
│   │           └── music_index.js          音乐首页脚本
│   └── upload                              用户自定义上传图片存储目录
│       ├── movie
│       └── music
├── route                                   路由目录
│   └── router.js
├── test                                    测试文件目录
│   └── user
│       └── user.js
├── README.md
├── gulpfile.js                             gulp文件
├── package.json
└── webpack.config.js
